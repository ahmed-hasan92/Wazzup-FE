import React from 'react';
import { LuMessageCircleCode } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-zinc-900 via-zinc-800 to-cyan-900 flex justify-center items-center px-4">
      <form className="w-full md:max-w-md h-fit bg-black bg-opacity-40 rounded-lg shadow-lg p-8 md:p-10 flex flex-col justify-center font-roboto gap-2">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-8 space-x-2">
          <LuMessageCircleCode size={42} className="text-cyan-500" />
          <h1 className="text-4xl font-bold text-cyan-500 tracking-wider italic">
            Wazzup
          </h1>
        </div>

        {/* Title & Description */}
        <h2 className="text-xl font-bold text-white text-center">Login</h2>
        <p className="mt-2 mb-6 text-sm text-center text-gray-400">
          Welcome back user!
        </p>

        {/* Form Fields */}
        <div className="space-y-5 text-sm">
          <label className="block">
            <span className="text-gray-200">Email</span>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Enter your email"
            />
          </label>

          <label className="block">
            <span className="text-gray-200">Password</span>
            <input
              type="password"
              className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Enter your password"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 p-3 text-white bg-cyan-700 rounded-md hover:bg-cyan-800 focus:outline-none"
        >
          Login
        </button>

        {/* Login Redirect */}
        <p className="mt-4 text-sm text-gray-400 text-center">
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
