import React from 'react';
import './App.css';
import { Route, Navigate, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
