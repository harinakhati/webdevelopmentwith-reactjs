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
import css from'./App.module.css'

function App() {
  return (
    <div>
    <BrowserRouter>
    <nav className={css.menu}>
      <Link to="/">Home</Link>
      <Link style={{color: "red"}}to="/examples">Examples</Link>
      <Link to="/about">About</Link>
      </nav>
      <h1 style={{color: "Brown" }}>This is my react app.</h1>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/examples" Component={Demo}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    //  <div>
    //   <Demo/>

    //  </div>
  );
}

export default App;
