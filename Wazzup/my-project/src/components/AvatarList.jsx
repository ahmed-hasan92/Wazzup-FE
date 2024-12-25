import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import useProfile from '../hooks/useProfile';
import defaultProfilePicture from '../assets/dpp.jpg';
import { IMAGE_URL } from '../api';
import ChatroomContext from '../context/ChatroomContext';
import { socket } from '../api/socket';
const AvatarList = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { setCurrentChatroom } = useContext(ChatroomContext);
  const navigate = useNavigate();
  const { myProfile, isLoading } = useProfile();

  const handleToglleList = () => {
    setIsListOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    if (user?.userId) {
      // Notify the server about the user logging out
      socket.emit('user_disconnected', user.userId);
    }
    localStorage.removeItem('token');
    localStorage.removeItem('currentChatroom');
    setUser({ isUser: false, userId: null });
    setCurrentChatroom(null);
    navigate('/');
  };
  if (isLoading) {
    return null;
  }

  return (
    <>
      <span
        onClick={handleToglleList}
        className="bg-green-500 rounded-full cursor-pointer w-11 h-11"
      >
        <img
          src={
            myProfile?.image
              ? IMAGE_URL + myProfile?.image
              : defaultProfilePicture
          }
          alt="defaultImage"
          className="object-cover w-full h-full rounded-full"
        />
      </span>
      {isListOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute w-56 p-4 border border-gray-800 shadow-md h-fit bg-gray-950 top-12 right-6 rounded-xl drop-shadow-2xl shadow-gray-800"
        >
          <div className="flex flex-col flex-wrap w-full py-2 border-b h-fit border-cyan-700 text-wrap">
            <p className="text-sm font-poppins text-gray-50">
              {myProfile?.firstName} <span>{myProfile?.lastName}</span>
            </p>
            <p className="text-[0.75rem] text-gray-300 font-poppins mt-1">
              {myProfile?.email}
            </p>
          </div>
          <div className="w-full mt-2 h-fit flex-flex-col">
            <NavLink
              className="text-sm tracking-wide text-gray-50 hover:text-cyan-500 hover:font-semibold"
              to="*"
            >
              My profile
            </NavLink>
          </div>
          <button
            onClick={handleLogOut}
            className="mt-1 text-sm tracking-wide text-gray-50 hover:text-red-500 hover:font-semibold"
          >
            LogOut
          </button>
        </motion.div>
      )}
    </>
  );
};

export default AvatarList;
