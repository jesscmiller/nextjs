import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oops...</h1>
            <p>That page cannot be found.</p>
            <p>Return to the <Link href="/"><a>Homepage</a></Link></p>

        </div>
     );
}

export default NotFound;