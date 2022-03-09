



  // Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqH9dz62H5yvec_YQ_EKg8EACDibYGl_4",
  authDomain: "nextfire-a6a0d.firebaseapp.com",
  projectId: "nextfire-a6a0d",
  storageBucket: "nextfire-a6a0d.appspot.com",
  messagingSenderId: "798740177709",
  appId: "1:798740177709:web:b2cf8fad6044ff6d5ea9a4",
  measurementId: "G-JK8Y1KSMES"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

export function postToJSON(doc) {
  const data = doc.data();
  console.log('data:' + data);
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0
  }
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
