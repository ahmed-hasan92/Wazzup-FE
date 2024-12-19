import React from 'react';
import sendIcon from '../../assets/sendIcon.svg';
import attatchIcon from '../../assets/attachIcon.svg';
import ChatArea from '../../components/ChatArea';
import chatBg from '../../assets/SprinkleCyan.svg';
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${chatBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="flex flex-col justify-between w-full h-full px-4 "
    >
      <div className="flex items-center w-full gap-4 p-2 mt-2 bg-black rounded-md bg-opacity-30 h-fit drop-shadow-2xl ">
        <span className="rounded-full w-11 h-11">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profileImage"
            className="w-full h-full rounded-full"
          />
        </span>
        <div className="flex flex-col font-poppins">
          <p className="text-sm font-medium text-gray-50">John Doe</p>
          <p className="text-[0.8rem] font-medium text-green-600">Online</p>
        </div>
      </div>
      <div className="flex flex-1 overflow-y-auto custom-scroll ">
        <ChatArea />
      </div>
      <div className="flex items-center justify-center w-full gap-2 py-6 h-fit ">
        <div className="flex items-center justify-between w-3/4 px-2 bg-gray-900 border shadow-md xl:w-2/5 lg:w-2/3 md:w-2/3 h-fit rounded-3xl shadow-cyan-900 drop-shadow-2xl border-cyan-900 ">
          <input
            placeholder="Start texting or send images"
            className="w-full min-h-full p-4 text-sm text-gray-100 outline-none bg-inherit font-poppins rounded-l-3xl"
          />
          <button className="p-2 transition-transform duration-300 bg-gray-800 rounded-full text-gray-50 hover:bg-cyan-700 hover:scale-110 focus:outline-none">
            <img src={attatchIcon} alt="attatchIcon" className="w-5 h-5" />
          </button>
        </div>
        <button className="p-2 transition-transform duration-300 rounded-full bg-cyan-700 text-gray-50 hover:bg-cyan-800 hover:scale-110 focus:outline-none">
          <img src={sendIcon} alt="sendIcon" className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default Home;
