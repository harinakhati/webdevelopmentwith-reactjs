import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//import MessageBar from "./component/message" 
//import State from "./component/State";
//import TextBox from './component/TextBox';
import Demo from './component/Demo';
import Home from './component/Home';
import About from './component/About';
import{BrowserRouter, Route, Link, Routes}from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/examples">Examples</Link>
      <br />
      <Link to="/about">About</Link>
      </nav>
      <h1>This is my react app</h1>
      </BrowserRouter>
      </div>
    //  <div>
    //   <Demo/>

    //  </div>
  );
}

export default App;
