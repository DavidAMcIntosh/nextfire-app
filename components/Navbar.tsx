import Link from 'next/link'

export default function Navbar() {
    const user = null;
    const username = null;

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                    {/* user is signed-in and has a username */}
                    {username && (
                        <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                        <Link href={`/${username}`}>
                            <img src={user?.photoURL} alt="" />
                        </Link>
                        </li>
                        </>
                    )}


                    {/* user is notsigned-in OR has not created a username */}
                    {!username && (
                        <li>
                            <Link href="/enter">
                                <button className="btn-blue">Log in</button>
                            </Link>
                        </li>
                    )}
            </ul>
        </nav>
    )
}