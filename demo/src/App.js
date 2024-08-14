
import {useState} from 'react'
import reactlogo from './assets/react.svg';
import vitelogo from './vite.svg'
//Assignment2
import Home from "./components/Home1";
import About1 from './components/About1';
import Contact from "./components/Contact"
import Service from "./components/Service1";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>  
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
        </nav>
        <Routes>
          <Route path="/" exact Component={Home1}></Route>
          <Route path="/about" Component={About1}></Route>
          <Route path="/contact" Component={Contact}></Route>
          <Route path="/service" Component={Service1}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
