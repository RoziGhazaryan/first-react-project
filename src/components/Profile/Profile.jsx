import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.main_content}>
      <ProfileInfo />
      <MyPosts posts={props.profile.posts} 
      dispatch={props.dispatch} 
      newPostText={props.profile.newPostText} />
    </div>
  );
};

export default Profile;
