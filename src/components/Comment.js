import React, { useContext } from 'react';
import { useCotext} from 'react';
import UserInfoContext from '../context/UserInfoContext';

export default function Comment(){

    const {username , isAdmin} = useContext(UserInfoContext)
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