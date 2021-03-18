import React from "react";
import style from './Post.module.css'

const Post = data => {
    const {comment} = data;

    return <div>
        <div className={style.item}>
            <img src="https://image.freepik.com/free-psd/1x1-square-canvas-mockup-in-floater-frame_1332-326.jpg"
                 alt=""/>
            <div className={style.innerItem}>
                <div>{comment}</div>
                <button>Like</button>
            </div>
        </div>
    </div>
}

export default Post;