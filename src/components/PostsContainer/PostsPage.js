//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = ({posts}) => {
 
  return (
    <div className="posts-container-wrapper">
      {posts.map((post, i) => 
        <Post post={post} key={i} /> 
      )}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;

