import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'About Us',
    path: '/aboutus',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Find Now',
    path: '#',
    icon: <IoIcons.IoIosEye />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Phones',
        path: '/phones',
        icon: <IoIcons.IoIosPhonePortrait />,
        cName: 'sub-nav'
      },
      {
        title: 'Laptops',
        path: '/laptops',
        icon: <IoIcons.IoIosLaptop />,
        cName: 'sub-nav'
      },
      {
        title: 'Gaming Consoles',
        path: '/gamingconsoles',
        icon: <GiIcons.GiGamepad />
      },
      {
        title: 'Accessories',
        path: '/accessories',
        icon: <BiIcons.BiHeadphone />
      }
    ]
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  
  {
    title: 'Support',
    path: '/contactus',
    icon: <IoIcons.IoMdHelpCircle />
  }
];