import React, { useState } from 'react'
import ImageCard from './ImageCard'
import axios from 'axios';

export default function MainPage({ posts, user }) {
  const [curPosts, setCurPosts] = useState(posts);

  const deleteHandler = async (postId) => {
    const response = await axios.delete(`/api/removepost/${postId}`, {});
    if (response.status === 200) {
      setCurPosts(curPosts.filter((post) => post.id !== postId));
    }
  };

  console.log(curPosts);
  console.log(user);

  return (
    <div className="card-login">
    {curPosts.map((post) => (
      <ImageCard 
      key={post.id}
      deleteHandler={deleteHandler}
      user={user}
      post={post}
      />
    ))}
    </div>
  )
}
