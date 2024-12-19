import React, { useEffect, useState } from 'react';
import LeftSideBar from './LeftSideBar';
import UpperBar from './UpperBar';
import RightSideBar from './RightSideBar';

const Layout = ({ children }) => {
  const [isLeftBarFullView, setIsLeftBarFullView] = useState(false);

  const [isLeftSideBarVisible, setIsLeftSideBarVisible] = useState(false); // For mobile screen size

  const handleLeftBarFullView = () => {
    setIsLeftBarFullView(true);
  };

  const handleLeftBarPartialView = () => {
    setIsLeftBarFullView(false);
  };

  const handleOpenMobileLeftSideBar = () => {
    if (window.innerWidth < 1024) {
      setIsLeftSideBarVisible((prev) => !prev);
    }
  };

  const handleCloseMobileLeftSideBar = () => {
    setIsLeftSideBarVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        handleCloseMobileLeftSideBar();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(isLeftSideBarVisible);

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-gradient-to-b from-gray-700 via-gray-700 to-cyan-700">
      <UpperBar
        handleOpenMobileLeftSideBar={handleOpenMobileLeftSideBar}
        isLeftSideBarVisible={isLeftSideBarVisible}
      />
      <div className="flex flex-1 overflow-y-hidden">
        <div
          onMouseEnter={handleLeftBarFullView}
          onMouseLeave={handleLeftBarPartialView}
          className={`${
            isLeftBarFullView ? 'w-60' : 'w-16'
          } hidden lg:block min-h-full transition-all duration-300 bg-gray-900 border-r border-gray-800 hover:bg-gray-800 overflow-y-auto`}
        >
          <LeftSideBar isLeftBarFullView={isLeftBarFullView} />
        </div>
        {isLeftSideBarVisible && (
          <div
            onClick={handleCloseMobileLeftSideBar}
            className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden "
          >
            <div
              className="absolute top-16 w-64 h-[calc(100%-4rem)] bg-gray-800 border-r border-cyan-800 overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
            >
              <LeftSideBar isLeftBarFullView={true} />
            </div>
          </div>
        )}
        <div className="flex flex-1 bg-gray-900 bg-opacity-75">{children}</div>
        <div className="hidden h-full bg-gray-900 border-l border-gray-800 w-80 lg:block">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
