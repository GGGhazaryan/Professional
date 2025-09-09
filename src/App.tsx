import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Main/Login';
import Register from './components/Main/Register';
import './CSS/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="*" element={<Navigate to="/log" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
