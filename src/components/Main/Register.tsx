import React, { useState } from 'react';
import { supabase } from '../../../supabase';
import { Link } from 'react-router-dom';
import '../../CSS/LoginRegister.css'
const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert('Registration successful! Check your email.');
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/log">Login</Link>
      </p>
    </div>
  );
};

export default Register;
