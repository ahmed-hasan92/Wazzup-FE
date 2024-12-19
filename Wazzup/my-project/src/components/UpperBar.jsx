import { LuMessageCircleCode } from 'react-icons/lu';
import defaultImage from '../assets/profile_picture_maker_before.webp';
import { TbUserSquareRounded } from 'react-icons/tb';
import mobileMenuIcon from '../assets/mobileMenuIcon2.svg';
import mobileMenuCloseIcon from '../assets/MobileMenuCloseIcon.svg';
import SearchForUsers from './SearchForUsers';
import MyContacts from './MyContacts';
const UpperBar = ({ handleOpenMobileLeftSideBar, isLeftSideBarVisible }) => {
  return (
    <div className="sticky top-0 z-20 w-full px-4 py-2 bg-gray-900 border-b border-gray-800 shadow-lg h-fit font-roboto">
      <div className="flex items-center justify-between w-full">
        {/* App Logo */}
        <div className="items-center hidden gap-2 lg:flex text-cyan-500">
          <LuMessageCircleCode size={24} />
          <h1 className="text-lg italic font-semibold tracking-wide">Wazzup</h1>
        </div>
        <div className="flex items-center lg:hidden">
          <button onClick={handleOpenMobileLeftSideBar}>
            <img
              src={isLeftSideBarVisible ? mobileMenuCloseIcon : mobileMenuIcon}
              alt="mobileMenuIcon"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          {/* Search Button */}
          <SearchForUsers />

          {/* User Profile Button */}
          <MyContacts />

          {/* Profile Image */}
          <span className="bg-green-500 rounded-full w-11 h-11">
            <img
              src={defaultImage}
              alt="defaultImage"
              className="object-cover w-full h-full rounded-full"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpperBar;
