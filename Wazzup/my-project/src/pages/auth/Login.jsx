import React, { useContext, useState } from 'react';
import { LuMessageCircleCode } from 'react-icons/lu';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/auth';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['LOGIN'],
    mutationFn: () => login(loginData),
    onSuccess: (response) => {
      const decoded = jwtDecode(response.token);
      setUser({ isUser: true, userId: decoded._id });
      toast.success('Welcome back');
      navigate('/home');
    },
    onError: (error) => {
      toast.error('Wrong email or password' || `${error.response.data}`);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-cyan-900">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center w-full gap-2 p-8 bg-black rounded-lg shadow-lg md:max-w-md h-fit bg-opacity-40 md:p-10 font-roboto"
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-8 space-x-2">
          <LuMessageCircleCode size={42} className="text-cyan-500" />
          <h1 className="text-4xl italic font-bold tracking-wider text-cyan-500">
            Wazzup
          </h1>
        </div>

        {/* Title & Description */}
        <h2 className="text-xl font-bold text-center text-white">Login</h2>
        <p className="mt-2 mb-6 text-sm text-center text-gray-400">
          Welcome back user!
        </p>

        {/* Form Fields */}
        <div className="space-y-5 text-sm">
          <label className="block">
            <span className="text-gray-200">Email</span>
            <input
              type="email"
              name="email"
              required
              value={loginData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Enter your email"
            />
          </label>

          <label className="block">
            <span className="text-gray-200">Password</span>
            <input
              type="password"
              name="password"
              required
              value={loginData.password}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Enter your password"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 mt-6 text-white rounded-md bg-cyan-700 hover:bg-cyan-800 focus:outline-none"
        >
          Login
        </button>

        {/* Login Redirect */}
        <p className="mt-4 text-sm text-center text-gray-400">
          Don't Have an account already?{' '}
          <NavLink to="/register" className="text-cyan-500 hover:underline">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
