import { useState } from 'react'
import Navbar from './navigation';
import './App.css'
import {Router,Routes, Route,} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar/>
  )
}

export default App
