import React from "react";
import style from './Profile.module.css';
import Posts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <img
            src="https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400"/>
        <Posts/>
    </div>
}

export default Profile;