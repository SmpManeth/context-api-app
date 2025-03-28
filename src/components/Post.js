import React from "react";
import Comment from "./Comment";


export default function Post({username, isAdmin}) {

   

    return(
        <div>
            <h1>Post</h1>
            <p>Logged In As ...... {username}</p>
            {
                isAdmin && <button >Delete Post</button>
            }
            <Comment username={username} isAdmin={isAdmin} />
        </div>
    );
}