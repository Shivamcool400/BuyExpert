import React, { Component, useState } from 'react';
import './navbar.css';
import Login from './pages/login';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider';
import Fire from '../firebase';
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';


const Nav = styled.div`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
    color: white;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;



const Logo = styled(Link)`
  color: white;
  text-align: center;
  margin-left: 15px;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Play', sans-serif;
  &:hover {
    color: white;
  }
`;

const LoginPage = styled(Link)`
  color: white;
  text-align: center;
  margin-left: 40px;
  position: absolute;
  top: 14px;
  right: 20px;
  font-family: 'Play', sans-serif;
  background: #1888ff;
  padding: 7px 20px;
  border-radius: 20px;
  &:hover {
    color: white;
    border: 2px solid #1888ff;
    background: transparent;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;



function Navbar() {
        const [{ user }, dispatch] = useStateValue();
        const history = useHistory() ;

        const handleLogout = () => {
                Fire.auth().signOut();
                };

        const [click,setClick] = useState(false);

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => {
          setSidebar(!sidebar);
          window.scrollTo(0,0);
        }

        const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [open,setOpen] = useState(false);

  const toggledd = () => setOpen(!open);


  const closeDropdownandmenu = () => {
    setOpen(!open);
    setSidebar(!sidebar);
    window.scrollTo(0,0);
  }

  const subNav = [
    {
      title: 'Phones',
      path: '/phones',
      icon: <IoIcons.IoIosPhonePortrait />
    },
    {
      title: 'Laptops',
      path: '/laptops',
      icon: <IoIcons.IoIosLaptop />
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

        return (

                <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <Logo to='/home'>buyideal</Logo>
          <LoginPage to={!user && '/login'} onClick={handleLogout}>{user ? 'LogOut' : 'Login'}</LoginPage>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <Link to='/home' className='pagelinks' onClick={closeMobileMenu}><AiIcons.AiFillHome /><SidebarLabel>Home</SidebarLabel></Link>
            <Link to='/aboutus' className='pagelinks' onClick={closeMobileMenu}><IoIcons.IoIosPaper /><SidebarLabel>About Us</SidebarLabel></Link>
            <Link to='#' className='pagelinks' onClick={toggledd}><IoIcons.IoIosEye /><SidebarLabel>Find Now?</SidebarLabel>
            <div className='arrow_icon'>{open ? <RiIcons.RiArrowUpSFill /> : <RiIcons.RiArrowDownSFill /> }</div>
            </Link>
            {open && (
              subNav.map((item, index) => {
                return (
                  <DropdownLink to={item.path} key={index} onClick={closeDropdownandmenu}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                  </DropdownLink>
            )}))}
           <Link to='/ourteam' className='pagelinks' onClick={closeMobileMenu}><IoIcons.IoMdPeople /><SidebarLabel>Team</SidebarLabel></Link>
            <Link to='/contactus' className='pagelinks' onClick={closeMobileMenu}><IoIcons.IoMdHelpCircle /><SidebarLabel>Support</SidebarLabel></Link>
            {/* {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })} */}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
                
        );

}

export default Navbar;