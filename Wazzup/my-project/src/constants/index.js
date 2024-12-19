import { GrHomeRounded } from 'react-icons/gr';
import { FiSettings } from 'react-icons/fi';
import { LuBadgeInfo } from 'react-icons/lu';
import homeIcon from '../assets/homeIcon.svg';
import settingsIcon from '../assets/settingsIcon.svg';
import infoIcon from '../assets/infoIcon.svg';

export const leftSideBarItems = [
  { name: 'Home Page', icon: homeIcon, route: '/home' },
  { name: 'Setting', icon: settingsIcon, route: '*' },
  { name: 'App information', icon: infoIcon, route: '*' },
];
