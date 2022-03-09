import styles from '../../styles/Post.module.css';
import PostContent from '../../components/PostContent';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { firestore, getUserWithUsername, postToJSON } from "../../lib/firebase";
//import { UserContext } from '@lib/context';
import { useContext } from 'react';

export async function getStaticProps({ params }) {
  const { username, slug } = params;
  console.log(`user: ${username}`)
  console.log(`slug: ${slug}`)
  const userDoc = await getUserWithUsername(username);
  //console.log(`userDoc: ${JSON.stringify(userDoc)}`)
  let post;
  let path;

  if (userDoc) {
    const postRef = userDoc.ref.collection('posts').doc(slug);
    console.log(`post ref= ${JSON.stringify(postRef)}`);
    post = postToJSON(await postRef.get());

    path = postRef.path;
  }

  return {
    props: { post, path },
    revalidate: 100,
  };
}

export async function getStaticPaths() {
  const snapshot = await firestore.collectionGroup('posts').get();
  const paths = snapshot.docs.map((doc) => {
    const { slug, username } = doc.data();
    return {
      params: { username, slug },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  }
}
export default function Post(props) {
  const postRef = firestore.doc(props.path);
  const [realtimePost] = useDocumentData(postRef);

  const post = realtimePost || props.post;

  //const { user: currentUser } = useContext(UserContext);

    return (
      <main className={styles.container}>

        <section>
          <PostContent post={post}/>
        </section>

        <aside className='card'>
          <p>
            <strong>{post.heartCount || 0} ❤️</strong>
          </p>
        </aside>

      </main>
    )
  }