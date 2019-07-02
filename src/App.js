import React from 'react';
import './App.css';
import Sidebar from "./container/Sidebar";
import  MessageList  from "./container/MessageList";
import  AddMessage  from "./container/AddMessage";

function App() {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessageList />
        <AddMessage />
      </section>
    </div>
  );
}

export default App;
