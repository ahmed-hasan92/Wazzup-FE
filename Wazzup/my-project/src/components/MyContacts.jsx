import React, { useState } from 'react';
import { TbUserSquareRounded } from 'react-icons/tb';
import trachIcon from '../assets/trachIcon.svg';
import messageIcon from '../assets/sendMessageIcon.svg';

const mockContacts = [
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

const MyContacts = () => {
  const [contactModal, setContactModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [nameLabel, setNameLabel] = useState(false);

  const handleOpenContactModal = () => setContactModal(true);
  const handleCloseContactModal = () => setContactModal(false);
  const handleShowNameLabel = () => {
    setNameLabel((prev) => !prev);
  };

  const filteredContacts = mockContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <button
        onClick={handleOpenContactModal}
        onMouseEnter={handleShowNameLabel}
        onMouseLeave={handleShowNameLabel}
        className="relative p-2 transition-transform duration-300 bg-gray-800 rounded-full text-gray-50 hover:bg-cyan-700 hover:scale-110 focus:outline-none"
      >
        <TbUserSquareRounded size={22} />
      </button>
      <span
        className={`absolute w-fit h-fit p-2 bg-gray-800 rounded-md text-sm text-gray-50 font-poppins top-full transition-all transform opacity-0 scale-90 ${
          nameLabel
            ? 'block opacity-100 scale-100 duration-300 delay-200'
            : 'hidden opacity-0 scale-90 duration-300 delay-0'
        }`}
      >
        Contacts
      </span>
      {contactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-4 bg-black bg-opacity-50 font-poppins">
          <div className="relative w-full max-w-2xl p-6 bg-gray-900 rounded-md shadow-lg h-[70vh]">
            <button
              onClick={handleCloseContactModal}
              className="absolute text-gray-400 top-2 right-2 hover:text-white"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-4 text-cyan-500">
              <TbUserSquareRounded size={26} />
              <h2 className="text-[1rem] font-medium ">My Contacts</h2>
            </div>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 mt-2 mb-4 text-sm bg-gray-800 rounded-md text-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />

            {/* Scrollable Contact List */}
            <div className="h-[calc(100%-8rem)] overflow-y-auto space-y-4 mt-2 custom-scroll">
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="flex flex-col p-4 transition-transform duration-200 bg-gray-800 rounded-md md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={contact.profileImage}
                        alt={contact.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-bold text-gray-100">
                          {contact.name}
                        </p>
                        <p className="text-xs text-gray-400">{contact.email}</p>
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
                      <button className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-white transition-transform bg-red-700 rounded-lg hover:bg-red-800">
                        Remove
                        <img
                          src={trachIcon}
                          alt="trashIcon"
                          className="w-5 h-5"
                        />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400">No contacts found...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyContacts;
