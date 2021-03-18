import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div className={style.posts}>

        <Post comment='Hey'/>
        <Post comment='Nice'/>
        <Post comment='Photo'/>

        </div>
)
}

export default MyPosts;