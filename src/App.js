import React from 'react';
//ROUTER
import { Routes, Route } from 'react-router-dom';
//PAGES
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
//STYLES

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
