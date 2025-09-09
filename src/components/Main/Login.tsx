import React, { useState } from 'react';
import { supabase } from '../../../supabase';
import { Link, useNavigate } from 'react-router-dom';
import '../../CSS/LoginRegister.css'
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message);
    else {
      alert('Logged in!');
      console.log(data);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>
        No account? <Link to="/reg">Register</Link>
      </p>
    </div>
  );
};

export default Login;
