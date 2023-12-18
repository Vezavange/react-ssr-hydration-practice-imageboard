import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage/MainPage';

export default function App({user}) {
  return (
    <div className="container" user={user} >
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}