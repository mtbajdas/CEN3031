import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './LoginPage'
import CreateAccount from './CreateAccount';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import { auth } from "./firebase";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="justify-center">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/create-account" element={<CreateAccount/>}/>
          <Route path="/home" element={<Home userId={user?.uid} />}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
