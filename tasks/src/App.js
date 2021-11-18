import React from 'react';
import './App.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import LoginProvider from './components/context'
import Posts from './components/Posts';
import Comments from './components/Comments';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";





function App() {
  return (
    <>
      <Router >
       
        <LoginProvider >
        <Header />
        <Routes >
          <Route path="/"  element={<LogIn />} />
          <Route path="/posts"  element={<Posts />} />
          <Route path="/Comments" element={<Comments />} />
        </Routes >
        </LoginProvider >
      </Router > 

    </ >
  );
}

export default App;
