import React from "react";
import style from './Post.module.css'

const Post = data => {

    const {comment, avatar} = data;

    return <div>
        <div className={style.item}>
            <img src={avatar}/>
            <div className={style.innerItem}>
                <div>{comment}</div>
                <button>Like</button>
            </div>
        </div>
    </div>
}

export default Post;