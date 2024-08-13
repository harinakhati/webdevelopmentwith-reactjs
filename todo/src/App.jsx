import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import MessageBar from "./component/message" 
import State from "./component/State";
import TextBox from './component/TextBox';

import './App.css'
function App() {
  return (
     <div>
     <h1>Harina</h1>
     <MessageBar message="this is a message from app.js"/>
     <MessageBar message="again from app.js"/>
     <State />
    <TextBox />
     </div>
  );
}

export default App;
