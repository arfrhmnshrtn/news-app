import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import NavbarTop from './pages/NavbarTop.jsx';
import NavbarBottom from './pages/NavbarBottom.jsx';
import Home from './pages/Home.jsx';
import Headlines from './pages/Headlines.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Business from './pages/Category.jsx';
import Profile from './pages/profile.jsx';
import Search from './pages/Search.jsx';
import Signup from './pages/Signup.jsx';
import  Bookmark  from './pages/Bookmark.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavbarTop /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headlines" element={<Headlines />} />
      <Route path="/:id" element={<Business />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/result" element={<Search />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
    <NavbarBottom />
  </BrowserRouter>
)
