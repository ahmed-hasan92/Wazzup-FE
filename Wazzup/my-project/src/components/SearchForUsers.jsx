import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import searchUserIcon from '../assets/userSearchIcon.svg';
import messageIcon from '../assets/sendMessageIcon.svg';
import addContactIcon from '../assets/addContactIcon.svg';
import useProfile from '../hooks/useProfile';
import defaultProfilePicture from '../assets/dpp.jpg';
import { IMAGE_URL } from '../api';
import useContact from '../hooks/useContact';
import trachIcon from '../assets/trachIcon.svg';

const SearchForUsers = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [nameLabel, setNameLabel] = useState(false);

  const { allProfiles, myProfile, isLoading } = useProfile();
  const { addTo } = useContact();

  const handleAddToContact = (userId) => {
    addTo(userId);
  };

  const handleOpenSearchModal = () => setSearchModal(true);
  const handleCloseSearchModal = () => setSearchModal(false);
  const handleShowNameLabel = () => {
    setNameLabel((prev) => !prev);
  };

  const filteredUsers = allProfiles?.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );
  if (isLoading) {
    return null;
  }
  return (
    <>
      <button
        onClick={handleOpenSearchModal}
        onMouseEnter={handleShowNameLabel}
        onMouseLeave={handleShowNameLabel}
        className="relative p-2 transition-transform duration-300 bg-gray-800 rounded-full text-gray-50 hover:bg-cyan-700 hover:scale-110 focus:outline-none"
      >
        <BiSearchAlt size={22} />
      </button>
      <span
        className={`absolute w-fit h-fit p-2 bg-gray-800 rounded-md text-sm text-gray-50 font-poppins top-full transition-all transform opacity-0 scale-90 right-36 ${
          nameLabel
            ? 'block opacity-100 scale-100 duration-300 delay-200'
            : 'hidden opacity-0 scale-90 duration-300 delay-0'
        }`}
      >
        Users search
      </span>
      {searchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-4 bg-black bg-opacity-50 font-poppins">
          <div className="relative w-full max-w-2xl p-6 bg-gray-900 rounded-md shadow-lg h-[70vh]">
            <button
              onClick={handleCloseSearchModal}
              className="absolute text-gray-400 top-2 right-2 hover:text-white"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={searchUserIcon}
                alt="searchUserIcon"
                className="w-5 h-5"
              />
              <h2 className="text-[1rem] font-medium text-cyan-500">
                Search Users
              </h2>
            </div>

            <input
              type="text"
              placeholder="Type a username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 mt-2 mb-4 text-sm bg-gray-800 rounded-md text-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />

            <div className="h-[calc(100%-8rem)] overflow-y-auto space-y-4 mt-2 custom-scroll">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <div
                    key={user._id}
                    className="flex flex-col p-4 transition-transform duration-200 bg-gray-800 rounded-md md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          user.image
                            ? IMAGE_URL + user.image
                            : defaultProfilePicture
                        }
                        alt={user.firstName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-100">
                          {user.firstName + ' ' + user.lastName}
                        </p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4 md:mt-0 md:flex-row">
                      <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-white transition-transform bg-green-700 rounded-lg hover:bg-green-800">
                        Message
                        <img
                          src={messageIcon}
                          alt="messageIcon"
                          className="w-5 h-5"
                        />
                      </button>
                      {!myProfile?.contacts?.includes(user._id) ? (
                        <button
                          onClick={() => handleAddToContact(user._id)}
                          className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-white transition-transform rounded-lg bg-cyan-700 hover:bg-cyan-800"
                        >
                          Add
                          <img
                            src={addContactIcon}
                            alt="contactIcon"
                            className="w-5 h-5"
                          />
                        </button>
                      ) : (
                        <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-white transition-transform bg-red-700 rounded-lg hover:bg-red-800">
                          Remove
                          <img
                            src={trachIcon}
                            alt="trashIcon"
                            className="w-5 h-5"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">No users found...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForUsers;
