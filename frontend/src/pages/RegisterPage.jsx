
import React, { useState } from 'react';
import axios from '../api/axios';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/auth/register', { email, password });
      alert('Registered! Please login.');
      window.location.href = '/login';
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Register</h2>
      <input className="border w-full p-2 mb-2" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border w-full p-2 mb-4" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="bg-green-500 text-white p-2 w-full">Register</button>
    </div>
  );
}

export default RegisterPage;
