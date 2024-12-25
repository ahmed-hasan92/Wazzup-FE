import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import moment from 'moment';

const ChatArea = (messages) => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col w-full h-full gap-4 px-4 py-8 font-poppins">
      {messages?.messages?.map((message) => (
        <div
          key={message?._id}
          className={`flex-col flex-wrap ${
            message?.sender === user.userId
              ? 'self-end rounded-l-2xl rounded-tr-2xl bg-cyan-950 ring-cyan-900'
              : 'self-start rounded-r-2xl rounded-tl-2xl bg-gray-200 '
          } p-4 w-fit h-fit flex  max-w-[50%]  drop-shadow-2xl ring-2 `}
        >
          <p
            className={`text-sm font-medium tracking-wide ${
              message?.sender === user.userId ? 'text-gray-50' : 'text-gray-700'
            } text-wrap`}
          >
            {message?.content}
          </p>
          <div className="flex items-end w-full mt-2">
            <p
              className={`ml-auto text-[0.7rem] ${
                message?.sender === user.userId
                  ? 'text-gray-300'
                  : 'text-gray-500'
              }`}
            >
              {moment(message?.timeStamp).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
