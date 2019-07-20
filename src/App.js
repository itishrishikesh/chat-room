import React from 'react';
import './App.css';
import Nav from "./container/Navbar";
import  MessageList  from "./container/MessageList";
import  AddMessage  from "./container/AddMessage";

import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <div class="container">
      <div class="main">
        <Nav />
        <MessageList />
        <AddMessage />
      </div>
    </div>
  );
}

export default App;
