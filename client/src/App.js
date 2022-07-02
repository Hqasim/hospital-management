import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Header from "./components/header/Header"
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
