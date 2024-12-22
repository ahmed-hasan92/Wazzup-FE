import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LuMessageCircleCode } from 'react-icons/lu';
import toast from 'react-hot-toast';
import UserContext from '../../context/UserContext';
import { useMutation } from '@tanstack/react-query';
import { register } from '../../api/auth';
import { jwtDecode } from 'jwt-decode';

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['REGISTER'],
    mutationFn: () => register(registerData),
    onSuccess: (response) => {
      const decoded = jwtDecode(response.token);
      setUser({ isUser: true, userId: decoded._id });
      navigate('/home');
      toast.success(`Thank you for registering ${registerData.firstName}`);
    },
    onError: (error) => {
      toast.error(`${error.response.data}`);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmmit = (e) => {
    e.preventDefault();
    if (registerData.confirmPassword !== registerData.password) {
      return toast.error('Please confirm your password');
    } else {
      mutate();
    }
  };
  return (
    <div className="flex items-center justify-center w-full min-h-screen px-4 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-cyan-900">
      <form
        onSubmit={handleFormSubmmit}
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
        <h2 className="text-xl font-bold text-center text-white">Register</h2>
        <p className="mt-2 mb-6 text-sm text-center text-gray-400">
          Join Wazzup and connect with your friends instantly.
        </p>

        {/* Form Fields */}
        <div className="space-y-5 text-sm">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-gray-200">First Name</span>
              <input
                type="text"
                required
                name="firstName"
                value={registerData.firstName}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
                placeholder="Enter your first name"
              />
            </label>

            <label className="block">
              <span className="text-gray-200">Last Name</span>
              <input
                type="text"
                required
                name="lastName"
                value={registerData.lastName}
                onChange={handleChange}
                className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
                placeholder="Enter your last name"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-gray-200">Email</span>
            <input
              type="email"
              required
              name="email"
              value={registerData.email}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Enter your email"
            />
          </label>

          <label className="block">
            <span className="text-gray-200">Password</span>
            <input
              type="password"
              required
              name="password"
              value={registerData.password}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Enter your password"
            />
          </label>

          <label className="block">
            <span className="text-gray-200">Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              required
              value={registerData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Confirm your password"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 mt-6 text-white rounded-md bg-cyan-700 hover:bg-cyan-800 focus:outline-none"
        >
          Register
        </button>

        {/* Login Redirect */}
        <p className="mt-4 text-sm text-center text-gray-400">
          Already have an account?{' '}
          <NavLink to="/" className="text-cyan-500 hover:underline">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
