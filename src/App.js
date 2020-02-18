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


/*
  username: "philzcoffee"
  thumbnailUrl: "https://instagram.fsjo9-1.fna.fbcdn.net/vp/d4728e507fe1eb2895fb7ca394bb6431/5E4122B1/t51.2885-15/s150x150/71118783_2434459423505735_6295784028176668008_n.jpg?_nc_ht=instagram.fsjo9-1.fna.fbcdn.net"
  imageUrl: "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80"
  likes: 400
  timestamp: "July 17th 2017, 12:42:40 pm"
  comments: Array(3)
    0: {
      username: "philzcoffee", 
      text: "We've got more than just delicious coffees to offer at our shops!"
    }
    1: {username: "biancasaurus", text: "Looks delicious!"}
    2: {username: "martinseludo", text: "Can't wait to try it!"}
*/

const App = () => {
  // set up state for your data
  const [posts, setPosts] = useState(data);

  const updateSearch = (searchString) => {
    setPosts(data.filter(post => post.username.includes(searchString)));
  }

  return (
    <div className="App">
      <SearchBar posts={posts} updateSearch={updateSearch}/>
      <PostsPage posts={posts} />
      {/* Add imported components here to render them */}
    </div>
  );
};

export default App;
