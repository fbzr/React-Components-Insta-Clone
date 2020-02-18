//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(data);
  
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

