import React from "react";
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const postsData = [
    {comment: 'Hey', avatar: 'https://image.freepik.com/free-psd/1x1-square-canvas-mockup-in-floater-frame_1332-326.jpg'},
    {comment: 'Nice', avatar: 'https://image.freepik.com/free-psd/1x1-square-canvas-mockup-in-floater-frame_1332-326.jpg'},
    {comment: 'Me fine', avatar: 'https://image.freepik.com/free-psd/1x1-square-canvas-mockup-in-floater-frame_1332-326.jpg'},
];


const renderPostsData = postsData.map(d => < Post comment={d.comment} avatar={d.avatar}/>)

const MyPosts = () => {
    return (
        <div className={style.posts}>
            {renderPostsData}
        </div>
    )
}

export default MyPosts;