import Header from './components/Main/Header';
import Login from './components/Main/Login';
import Register from './components/Main/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/log" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="*" element={<Navigate to="/log" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
