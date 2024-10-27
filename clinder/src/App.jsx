import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage'
import CreateAccount from './CreateAccount';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="justify-center">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/create-account" element={<CreateAccount/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
