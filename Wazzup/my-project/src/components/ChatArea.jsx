import React from 'react';
const ChatArea = () => {
  return (
    <div className="flex flex-col w-full h-full gap-4 px-4 py-8 font-poppins">
      <div className="flex-col flex-wrap self-end p-4 w-fit h-fit fkex bg-cyan-950 max-w-[50%] rounded-l-2xl rounded-tr-2xl drop-shadow-2xl ring-2 ring-cyan-900">
        <p className="text-sm font-medium tracking-wide text-gray-50">
          Hi John. How have you been?{' '}
        </p>
        <div className="flex items-end w-full mt-2">
          <p className="ml-auto text-[0.7rem] text-gray-300">2 Days ago </p>
        </div>
      </div>
      <div className="flex-col flex-wrap  p-4 w-fit h-fit fkex bg-gray-600 max-w-[50%] rounded-r-2xl rounded-tl-2xl drop-shadow-2xl ring-2 ring-gray-900">
        <p className="text-sm font-medium tracking-wide text-white">
          I'm here *_*
        </p>
        <div className="flex items-end w-full mt-2">
          <p className=" text-[0.7rem] text-gray-300">2 Days ago </p>
        </div>
      </div>
      <div className="flex-col flex-wrap  p-4 w-fit h-fit fkex bg-gray-600 max-w-[50%] rounded-r-2xl rounded-tl-2xl drop-shadow-2xl ring-2 ring-gray-900">
        <p className="text-sm font-medium tracking-wide text-white">
          Hey bro, how are you? I've been doing well thanks for asking. I was
          out of country for a vacation with my family so I couldn't reply to
          any of your messages.{' '}
        </p>
        <div className="flex items-end w-full mt-2">
          <p className=" text-[0.7rem] text-gray-300">2 Days ago </p>
        </div>
      </div>
      <div className="flex-col flex-wrap  p-4 w-fit h-fit fkex bg-gray-600 max-w-[50%] rounded-r-2xl rounded-tl-2xl drop-shadow-2xl ring-2 ring-gray-900">
        <p className="text-sm font-medium tracking-wide text-white">
          Sorry about that -_-
        </p>
        <div className="flex items-end w-full mt-2">
          <p className=" text-[0.7rem] text-gray-300">2 Days ago </p>
        </div>
      </div>
      <div className="flex-col flex-wrap self-end p-4 w-fit h-fit fkex bg-cyan-950 max-w-[50%] rounded-l-2xl rounded-tr-2xl drop-shadow-2xl ring-2 ring-cyan-900">
        <p className="text-sm font-medium tracking-wide text-gray-50">
          That's fine bro. Hope you enjoyed your vacation with you'r family{' '}
        </p>
        <div className="flex items-end w-full mt-2">
          <p className="ml-auto text-[0.7rem] text-gray-300">2 Days ago </p>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
