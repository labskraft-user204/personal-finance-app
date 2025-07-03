
import React, { useState } from 'react';
import axios from '../api/axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input className="border w-full p-2 mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border w-full p-2 mb-4" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full">Login</button>
    </div>
  );
}

export default LoginPage;
