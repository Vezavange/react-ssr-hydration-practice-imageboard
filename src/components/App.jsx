import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import MainPage from './MainPage/MainPage';
import SignUpPage from './AuthPages/SignUpPage';
import LoginPage from './AuthPages/LoginPage';
import NewPostPage from './NewPostPage/NewPostPage';

export default function App({user, posts}) {

  return (
    <div className="container" >
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<MainPage posts={posts} user={user} /> }  />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/newpost' element={<NewPostPage />} />
      </Routes>
    </div>
  );
}