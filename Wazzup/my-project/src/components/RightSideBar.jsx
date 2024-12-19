import React from 'react';
import chatIcon from '../assets/chatIcon.svg';
const mockChats = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    newMessages: 3,
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: 'Meeting at 5 PM!',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    newMessages: 1,
  },
  {
    id: 3,
    name: 'Mike Ross',
    lastMessage: 'Let’s grab lunch tomorrow.',
    profileImage: 'https://randomuser.me/api/portraits/men/47.jpg',
    newMessages: 0,
  },
  {
    id: 4,
    name: 'Rachel Green',
    lastMessage: 'Thanks for the help!',
    profileImage: 'https://randomuser.me/api/portraits/women/50.jpg',
    newMessages: 2,
  },
  {
    id: 5,
    name: 'Harvey Specter',
    lastMessage: 'Case closed. Good job!',
    profileImage: 'https://randomuser.me/api/portraits/men/65.jpg',
    newMessages: 0,
  },
  {
    id: 6,
    name: 'Monica Geller',
    lastMessage: 'Dinner at my place',
    profileImage: 'https://randomuser.me/api/portraits/women/25.jpg',
    newMessages: 4,
  },
];

const RightSideBar = () => {
  return (
    <div className="flex flex-col w-full h-full p-4 overflow-y-auto bg-gray-900">
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <img src={chatIcon} alt="chatIcon" className="w-5 h-5" />
          <h2 className="text-lg text-cyan-500 font-poppins">Chats</h2>
        </div>
      </div>

      <ul className="mt-8 space-y-4 font-poppins">
        {mockChats.map((chat) => (
          <li
            key={chat.id}
            className="flex items-center p-3 transition-all duration-200 rounded-md cursor-pointer hover:bg-gray-800"
          >
            <div className="relative flex-shrink-0 overflow-hidden rounded-full w-11 h-11">
              <img
                src={chat.profileImage}
                alt={chat.name}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex justify-between w-full ml-4">
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-gray-100">{chat.name}</h3>
                <p className="mt-1 text-sm text-gray-400 truncate">
                  {chat.lastMessage}
                </p>
              </div>

              {chat.newMessages > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {chat.newMessages}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSideBar;
