import React from 'react';
import './App.css';
import Header from './components/header/Header';
import LogIn from './components/logIn/LogIn';
import LoginProvider from './components/context/context'
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";






function App() {
  return (

      <Router >
    <LoginProvider >
        <Header />

        <Switch >
          <Route exact path="/" component={LogIn} />
          <Route path="/posts" component={Posts } />
          <Route path="/Comments" component={Comments} />
        </Switch >
        </LoginProvider >
      </Router>
    
  );
}

export default App;




{/* <Router >
       
<LoginProvider >
<Header />
<Switch >
  <Route path="/"  element={<LogIn />} />
  <Route path="/posts"  element={<Posts />} />
  <Route path="/Comments" element={<Comments />} />
</Switch >
</LoginProvider >
</Router >  */}









