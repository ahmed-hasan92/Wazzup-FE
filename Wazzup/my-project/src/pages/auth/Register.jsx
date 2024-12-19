import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuMessageCircleCode } from 'react-icons/lu';

const Register = () => {
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
        <h2 className="text-xl font-bold text-white text-center">Register</h2>
        <p className="mt-2 mb-6 text-sm text-center text-gray-400">
          Join Wazzup and connect with your friends instantly.
        </p>

        {/* Form Fields */}
        <div className="space-y-5 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-gray-200">First Name</span>
              <input
                type="text"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-cyan-500"
                placeholder="Enter your first name"
              />
            </label>

            <label className="block">
              <span className="text-gray-200">Last Name</span>
              <input
                type="text"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-cyan-500"
                placeholder="Enter your last name"
              />
            </label>
          </div>

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

          <label className="block">
            <span className="text-gray-200">Confirm Password</span>
            <input
              type="password"
              className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring focus:ring-cyan-500"
              placeholder="Confirm your password"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 p-3 text-white bg-cyan-700 rounded-md hover:bg-cyan-800 focus:outline-none"
        >
          Register
        </button>

        {/* Login Redirect */}
        <p className="mt-4 text-sm text-gray-400 text-center">
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
