import React from 'react';
import './App.css';
import Nav from "./container/Navbar";
import  MessageList  from "./container/MessageList";
import  AddMessage  from "./container/AddMessage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "font-awesome/css/font-awesome.css";
import Login from './container/Login';

function Home() {
  return <React.Fragment>
    <MessageList></MessageList>
    <AddMessage></AddMessage>
  </React.Fragment>;
}

function App() {
  return (
    <Router>
      <div class="container">
        <div class="main">
          <Nav />
          <Router>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Router>
        </div>
      </div>
    </Router>
  );
}

export default App;
