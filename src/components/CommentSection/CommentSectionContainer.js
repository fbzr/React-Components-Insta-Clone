// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);  

  let newComment = '';

  const changeComment = (e) => {
    newComment = e.target.value;
  }

  const submitComment = (e) => {
    e.preventDefault();
    setComments([...comments, {
      username: 'fabricio',
      text: newComment
    }]);
    e.currentTarget.querySelector('input').value = '';
  }

  return (
    <div>
      {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      {/* map through the comments data and return the Comment component */}
      <CommentInput changeComment={changeComment} submitComment={submitComment} />
    </div>
  );
};

export default CommentSection;
