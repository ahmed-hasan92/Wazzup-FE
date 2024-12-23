import React, { useContext } from 'react';
import chatIcon from '../assets/chatIcon.svg';
import useChatroom from '../hooks/useChatroom';
import defaultProfilePicture from '../assets/dpp.jpg';
import { IMAGE_URL } from '../api';
import UserContext from '../context/UserContext';
import ChatroomContext from '../context/ChatroomContext';

const RightSideBar = () => {
  const { user } = useContext(UserContext);
  const { setCurrentChatroom } = useContext(ChatroomContext);
  const { myChatrooms, isLoading } = useChatroom();

  if (isLoading) {
    return null; // You can replace this with a loading spinner if desired
  }

  // Filter chatrooms to include only those with messages
  const filteredChatrooms = myChatrooms?.filter(
    (chat) => chat.messages && chat.messages.length > 0,
  );

  return (
    <div className="flex flex-col w-full h-full p-4 overflow-y-auto bg-gray-900">
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <img src={chatIcon} alt="chatIcon" className="w-5 h-5" />
          <h2 className="text-lg text-cyan-500 font-poppins">Chats</h2>
        </div>
      </div>

      {filteredChatrooms?.length === 0 ? (
        <p className="mt-8 text-sm text-center text-gray-400">
          No chats available
        </p>
      ) : (
        <ul className="mt-8 space-y-4 font-poppins">
          {filteredChatrooms.map((chat) => (
            <li
              key={chat._id}
              onClick={() => setCurrentChatroom(chat._id)}
              className="flex items-center p-3 transition-all duration-200 rounded-md cursor-pointer hover:bg-gray-800"
            >
              <div className="relative flex-shrink-0 overflow-hidden rounded-full w-11 h-11">
                <img
                  src={
                    chat?.participants[0]?.image
                      ? IMAGE_URL + chat?.participants[0]?.image
                      : defaultProfilePicture
                  }
                  alt={chat?.participants[0]?.firstName || 'User'}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex justify-between w-full ml-4">
                <div className="flex flex-col">
                  <h3 className="text-sm font-bold text-gray-100">
                    {chat?.participants[0]?.firstName +
                      ' ' +
                      chat?.participants[0]?.lastName}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400 truncate">
                    {chat?.messages[chat?.messages?.length - 1]?.content
                      ?.length >= 10
                      ? chat?.messages[
                          chat?.messages?.length - 1
                        ]?.content.slice(0, 10) + '...'
                      : chat?.messages[chat?.messages?.length - 1]?.content}
                  </p>
                </div>

                <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {
                    chat?.messages?.filter(
                      (message) =>
                        message.isRead === false &&
                        message.sender !== user.userId,
                    ).length
                  }
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RightSideBar;
