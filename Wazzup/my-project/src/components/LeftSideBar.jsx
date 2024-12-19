import React from 'react';
import { leftSideBarItems } from '../constants';
import { useLocation } from 'react-router-dom';
import { LuMessageCircleCode } from 'react-icons/lu';

const LeftSideBar = ({ isLeftBarFullView }) => {
  const location = useLocation();
  return (
    <div className="flex flex-col w-full h-full font-poppins ">
      <div className="flex items-center gap-2 px-4 mt-4 lg:hidden text-cyan-500">
        <LuMessageCircleCode size={24} />
        <h1 className="text-lg italic font-semibold tracking-wide">Wazzup</h1>
      </div>
      <ul className="flex flex-col items-center px-2 py-4 mt-4 space-y-2 lg:mt-0 ">
        {leftSideBarItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 px-4 py-2 w-full rounded-md hover:bg-cyan-700 transition cursor-pointer ${
              location.pathname === item.route ? 'bg-cyan-700' : ''
            }  ${
              isLeftBarFullView ? 'justify-start' : 'justify-center shrink-0'
            }`}
          >
            <img
              src={item.icon}
              alt={`${index} icon`}
              className="min-w-6 min-h-6 "
            />
            {isLeftBarFullView && (
              <span className="text-sm text-gray-100">{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
