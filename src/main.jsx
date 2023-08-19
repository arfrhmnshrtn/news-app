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
import { BrowserRouter,Routes, Route } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/headlines",
//     element: <Headlines />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavbarTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headlines" element={<Headlines />} />
    </Routes>
    <NavbarBottom />
  </BrowserRouter>
  // <BrowserRouter>
  //   <NavbarTop/>
  // </BrowserRouter>
)
