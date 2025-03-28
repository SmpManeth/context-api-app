import React from 'react';
import { useContext } from 'react';
import Page from  './Post'
import Post from './Post';

export default function BlogPage(){

    return(
        <div>
            <h1>Blog Page</h1>
            <Post />
        </div>
    );
}