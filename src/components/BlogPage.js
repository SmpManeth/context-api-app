import React from 'react';
import { useContext } from 'react';
import Page from  './Post';
import Post from './Post';
import UserInfoContext from "../context/UserInfoContext";

export default function BlogPage(){
    const {username , isAdmin} = useContext(UserInfoContext)
    return(
        <div>
            <h1>Blog Page</h1>
            <Post username={username} isAdmin={isAdmin} />
        </div>
    );
}