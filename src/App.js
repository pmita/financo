import React from 'react';
//ROUTER
import { Routes, Route } from 'react-router-dom';
//COMPONENTS
import Navbar from './components/Navbar';
//PAGES
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
//HOOKS
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  //STATE & VARIABLES
  const { authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
