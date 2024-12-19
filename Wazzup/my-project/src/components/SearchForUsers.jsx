import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import searchUserIcon from '../assets/userSearchIcon.svg';
import messageIcon from '../assets/sendMessageIcon.svg';
import addContactIcon from '../assets/addContactIcon.svg';

const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Mike Ross',
    email: 'mike.ross@example.com',
    profileImage: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    id: 4,
    name: 'Rachel Green',
    email: 'rachel.green@example.com',
    profileImage: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
  {
    id: 5,
    name: 'Harvey Specter',
    email: 'harvey.specter@example.com',
    profileImage: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const SearchForUsers = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenSearchModal = () => setSearchModal(true);
  const handleCloseSearchModal = () => setSearchModal(false);

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <button
        onClick={handleOpenSearchModal}
        className="p-2 transition-transform duration-300 bg-gray-800 rounded-full text-gray-50 hover:bg-cyan-700 hover:scale-110 focus:outline-none"
      >
        <BiSearchAlt size={22} />
      </button>

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
                className="w-6 h-6"
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
                    key={user.id}
                    className="flex flex-col p-4 transition-transform duration-200 bg-gray-800 rounded-md md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={user.profileImage}
                        alt={user.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-100">
                          {user.name}
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
                      <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-white transition-transform rounded-lg bg-cyan-700 hover:bg-cyan-800">
                        Add
                        <img
                          src={addContactIcon}
                          alt="contactIcon"
                          className="w-5 h-5"
                        />
                      </button>
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
