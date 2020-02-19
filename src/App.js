/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
// import data 
import data from "./dummy-data";

const App = () => {
  // set up state for your data
  const [posts, setPosts] = useState(data);
  const [search, setSearch] = useState('');

  const updateSearch = (searchString) => {
    setSearch(searchString);
  }

  const increaseLikes = (post) => {
    setPosts(prevPosts => [...prevPosts, {
      ...post,
      likes: post.likes + 1
    }]);
  }

  const addComment = (post, comment) => {
    setPosts(prevPosts => [...prevPosts, {
      ...post,
      comments: post.comments.push(comment)
    }])
  }

  return (
    <div className="App">
      <SearchBar updateSearch={updateSearch}/>
      <PostsPage posts={posts} search={search} increaseLikes={increaseLikes} addComment={addComment} />
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
