import React, { useContext } from 'react';
import { useCotext} from 'react';


export default function Comment({username, isAdmin}) {

 
    return (
        <div>
            <h1>Comment</h1>
           <p>Logged In As ...... {username}</p>
           {
            isAdmin && <button >Edit Comment</button>
           }
        </div>
    )
;}