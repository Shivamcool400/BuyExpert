import React, { Component, useState } from 'react';
import './navbar.css';
import Login from './pages/login';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider';
import Fire from '../firebase';
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import styled from 'styled-components';



const Nav = styled.div`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);
  height: 65px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  padding: 7px 10px;
  &:hover {
    color: white;
    border: 2px solid #1888ff;
    background: transparent;
  }
`;



function Navbar() {
        const [{ user }, dispatch] = useStateValue();
        const history = useHistory() ;

        const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

        const handleLogout = () => {
                Fire.auth().signOut();
                
        };

        const [click,setClick] = useState(false);
        

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);


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
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>




















                
        //         <nav className="navbar fixed-top">
        //                 <Link to='/home' className='navbar-logo'>
        //                         <img src="./logomain.png" /> 
        //                 </Link>
        //                 <div className='menu-icon' onClick={handleClick}>
        //                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        //                 </div>

        //                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        //                         <li className="nav-item nav-item2">
        //                                 <Link to='/home' className='nav-links link' onClick={closeMobileMenu}>
        //                                         Home
        //                                 </Link>
        //                         </li>
        //                         <li className="nav-item nav-item2">
        //                                 <Link to='/aboutus' className='nav-links link' onClick={closeMobileMenu}>
        //                                         About Us
        //                                 </Link>
        //                         </li>
        //                         {/* <li class="nav-item nav-item2 dropdown">
        //   <Link to='#' className="nav-links dropdown-toggle link" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //     Find Here
        //   </Link>
        //   <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
        //     <li><a class="dropdown-item" href="/phones">Phones</a></li>
        //     <li><a class="dropdown-item" href="/laptops">Laptops</a></li>
        //     <li><a class="dropdown-item" href="/gamingconsoles">Gaming Consoles</a></li>
        //     <li><a class="dropdown-item" href="/accessories">Accessories</a></li>
        //   </ul>
        // </li> */}
        // <li className="nav-item nav-item2">
        //                                 <Link to='findnow' className='nav-links link' onClick={closeMobileMenu}>
        //                                         Find Now?
        //                                 </Link>
        //                         </li>

        //                         <li className="nav-item nav-item2 mylogin">
        //                                 <Link to={!user && '/login'} onClick={closeMobileMenu}>
        //                                 <a className="link mobile-login" onClick={handleLogout} href="#">{user ? 'LogOut' : 'Login'}</a>
        //                                 </Link>
        //                         </li>

        //                         <li className="nav-item nav-item2 nav-links-mobile">
        //                                 <Link to={!user && '/login'} onClick={closeMobileMenu}>
        //                                         <button className="btn btn2" onClick={handleLogout}>{user ? 'LogOut' : 'Login'}</button>
        //                                 </Link>
        //                         </li>
        //                 </ul>
                        
        //         </nav>
                




                //            <nav className="navbar navbar-expand-lg scrolling-navbar">
                //   <div className="container-fluid">
                //     <a className="navbar-brand abc pt-2" href="/home"><b>BUY</b></a>
                //     <button className="navbar-toggler abc" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                //       <span className=""/><>
                //   ☰
                // </>

                //     </button>
                //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
                //       <ul className="navbar-nav">
                //         <li className="nav-item abc">
                //           <a className="nav-link active pt-3" aria-current="page" href="/home">Home</a>
                //         </li>
                //         <li className="nav-item abc">
                //           <a className="nav-link pt-3" href="/aboutus">About us</a>
                //         </li>
                //         {/* <li className="nav-item abc">
                //           <a className="nav-link pt-3" href="/contactus">Contact us!</a>
                //         </li> */}
                //         <li className="nav-item abc">

                //           <Link to={!user && '/login'}>
                //           <a className="nav-link pt-3" onClick={handleLogout} href="#">{user ? 'LogOut' : 'Login'}</a>
                //           </Link>
                //         </li>
                //         {/* <li className="nav-item abc">
                //         <span className="nav-link pt-3">Hello {!user ? 'Guest' : user.email}</span>
                //         </li> */}
                //         {/* <li className="nav-item abc">
                //           <a className="nav-link pt-3 mx-5" href="/phones">Phones!</a>
                //         </li>
                //         <li className="nav-item abc">
                //           <a className="nav-link pt-3 mx-5" href="/laptops">Laptops!</a>
                //         </li>
                //         <li className="nav-item abc">
                //           <a className="nav-link pt-3 mx-5" href="/gamingconsoles">Gaming consoles!</a>
                //         </li>
                //         <li className="nav-item abc">
                //           <a className="nav-link pt-3 mx-5" href="/accessories">Accessories!</a> 
                //         </li>*/}
                //         {/* <li class="nav-item dropdown abc">
                //           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                //             Find Here
                //           </a>
                //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                //             <li><a class="dropdown-item" href="/phones">Phones</a></li>
                //             <li><a class="dropdown-item" href="/laptops">Laptops</a></li>
                //             <li><a class="dropdown-item" href="/gamingconsoles">Gaming Consoles</a></li>
                //             <li><a class="dropdown-item" href="/accessories">Accessories</a></li>
                //           </ul>
                //         </li> */}


                //         <li class="nav-item dropdown">
                //           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                //             Dropdown
                //           </a>
                //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                //             <li><a class="dropdown-item" href="#">Action</a></li>
                //             <li><a class="dropdown-item" href="#">Another action</a></li>

                //             <li><a class="dropdown-item" href="#">Something else here</a></li>
                //           </ul>
                //         </li>

                //       </ul>
                //     </div>
                //   </div>
                // </nav>







        );

}

export default Navbar;