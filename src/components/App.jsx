import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import MainPage from './MainPage/MainPage';
import SignUpPage from './AuthPages/SignUpPage';
import LoginPage from './AuthPages/LoginPage';

export default function App({user}) {
  return (
    <div className="container" user={user} >
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}