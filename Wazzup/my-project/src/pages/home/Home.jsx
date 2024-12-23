import React, { useState } from 'react';
import sendIcon from '../../assets/sendIcon.svg';
import attatchIcon from '../../assets/attachIcon.svg';
import ChatArea from '../../components/ChatArea';
import chatBg from '../../assets/SprinkleCyan.svg';
import useChatroom from '../../hooks/useChatroom';
import placholderVid from '../../assets/placeHolderVid.mp4';
import defaultProfilePicture from '../../assets/dpp.jpg';
import useMessage from '../../hooks/useMessage';
import toast from 'react-hot-toast';

const Home = () => {
  const [messageContent, setMessageContent] = useState('');
  const { oneRoom, isLoading } = useChatroom();

  const { sendMessage } = useMessage();

  const handleSendMessage = () => {
    if (!messageContent.trim()) {
      return toast.error('Message content cannot be empty');
    }

    const otherParticipant = oneRoom.participants?.[0];
    if (!otherParticipant?._id) {
      return alert('Recipient not found.');
    }

    sendMessage({ receiverId: otherParticipant._id, content: messageContent });
    setMessageContent(''); // Clear input after sending
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!oneRoom) {
    return (
      <div className="relative flex items-center justify-center w-full h-full bg-black ">
        <video
          src={placholderVid}
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full opacity-60"
        />
        <div className="absolute text-center text-gray-50 font-poppins">
          <p className="text-2xl font-bold text-white">No chatroom selected</p>
          <p className="text-sm text-gray-200">
            Select or create a chatroom to start messaging.
          </p>
        </div>
      </div>
    );
  }

  const otherParticipant = oneRoom.participants?.[0];

  return (
    <div
      style={{
        backgroundImage: `url(${chatBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="flex flex-col justify-between w-full h-full px-4"
    >
      {/* Chatroom Header */}
      <div className="flex items-center w-full gap-4 p-2 mt-2 bg-black rounded-md bg-opacity-30 h-fit drop-shadow-2xl">
        <span className="rounded-full w-11 h-11">
          <img
            src={
              otherParticipant?.image
                ? otherParticipant?.image
                : defaultProfilePicture
            }
            alt="profileImage"
            className="w-full h-full rounded-full"
          />
        </span>
        <div className="flex flex-col font-poppins">
          <p className="text-sm font-medium text-gray-50">
            {otherParticipant?.firstName} {otherParticipant?.lastName}
          </p>
          <p className="text-[0.8rem] font-medium text-green-600">Online</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 overflow-y-auto custom-scroll">
        <ChatArea messages={oneRoom.messages} />
      </div>

      {/* Message Input */}
      <div className="flex items-center justify-center w-full gap-2 py-6 h-fit">
        <div className="flex items-center justify-between w-3/4 px-2 bg-gray-900 border shadow-md xl:w-2/5 lg:w-2/3 md:w-2/3 h-fit rounded-3xl shadow-cyan-900 drop-shadow-2xl border-cyan-900">
          <input
            placeholder="Start texting or send images"
            name="messageContent"
            required
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            className="w-full min-h-full p-4 text-sm text-gray-100 outline-none bg-inherit font-poppins rounded-l-3xl"
          />
          <button className="p-2 transition-transform duration-300 bg-gray-800 rounded-full text-gray-50 hover:bg-cyan-700 hover:scale-110 focus:outline-none">
            <img src={attatchIcon} alt="attatchIcon" className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={handleSendMessage}
          className="p-2 transition-transform duration-300 rounded-full bg-cyan-700 text-gray-50 hover:bg-cyan-800 hover:scale-110 focus:outline-none"
        >
          <img src={sendIcon} alt="sendIcon" className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default Home;
