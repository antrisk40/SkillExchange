import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componant/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Navigation hook to redirect on successful login

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Attempt to authenticate with backend
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
      
      if (response.data.success) {
        // Notify of successful login
        toast.success("Login successful!");

        setEmail('');
        setPassword('');
        
        // Redirect to Profile page after a short delay
        setTimeout(() => {
          navigate('/profile');
        }, 1000);
      } else {
        toast.error("Invalid email or password");
      }

    } catch (error) {
      console.error('Login failed:', error);
      toast.error("Error logging in. Please try again.");
    }
  };

  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-blue-300">
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Login</h2>
            
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />

            <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md font-semibold hover:bg-indigo-600 transition duration-200"
            >
            Login
            </button>
            
            {/* Toast Container for notifications */}
            <ToastContainer />
        </form>
        </div>
    </>
  );
};

export default Login;