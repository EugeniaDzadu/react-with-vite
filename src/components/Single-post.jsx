import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function SinglePost({midHead, subHead, date}){
    return(
        <>
           {/* <!-- Post preview--> */}
                    <div className="post-preview">
                        <Link href="/post">
                            <h2 className="post-title">{midHead}</h2>
                            <h3 className="post-subtitle">{subHead}</h3>
                        </Link>
                        <p className="post-meta">
                            Posted by
                             <HashLink smooth to="#!">Start Bootstrap </HashLink>
                            on {date}, 2023
                        </p>
                    </div>
                    {/* <!-- Divider--> */}
                    <hr className="my-4" />
        </>

    )
}

export default SinglePost;