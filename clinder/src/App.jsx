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
import ClubPage from "./clubPage"

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
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/create-account" element={<CreateAccount/>}/>
          <Route path="/home" element={<Home userId={user?.uid} />}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/clubs/:clubid" element={<ClubPage userId={user?.uid}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
