import React, { Component, useState } from 'react';
import './navbar.css';
import Login from './pages/login';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateprovider';
import Fire from '../firebase';
import { useHistory } from 'react-router-dom';
// import Dropdown from './Dropdown'





function Navbar() {
        const [{ user }, dispatch] = useStateValue();
        const history = useHistory() ;

        const handleLogout = () => {
                Fire.auth().signOut();
                history.push('/login')
        };

        const [click,setClick] = useState(false);
        const [dropdown,setDropdown] = useState(false);

        const handleClick = () => setClick(!click);
        const closeMobileMenu = () => setClick(false);

        const onMouseEnter = () => {
                if(window.innerwidth < 960) {
                        setDropdown(false)
                }
                else {
                        setDropdown(true)
                }
        }
        const onMouseLeave = () => {
                if(window.innerwidth < 960) {
                        setDropdown(false)
                }
                else {
                        setDropdown(false)
                }
        }

        return (
                
                <nav className="navbar fixed-top">
                        <Link to='/home' className='navbar-logo'>
                                <img src="./logomain.png" /> 
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>

                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className="nav-item nav-item2">
                                        <Link to='/home' className='nav-links link' onClick={closeMobileMenu}>
                                                Home
                                        </Link>
                                </li>
                                <li className="nav-item nav-item2">
                                        <Link to='/aboutus' className='nav-links link' onClick={closeMobileMenu}>
                                                About Us
                                        </Link>
                                </li>
                                {/* <li class="nav-item nav-item2 dropdown">
          <Link to='#' className="nav-links dropdown-toggle link" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Find Here
          </Link>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="/phones">Phones</a></li>
            <li><a class="dropdown-item" href="/laptops">Laptops</a></li>
            <li><a class="dropdown-item" href="/gamingconsoles">Gaming Consoles</a></li>
            <li><a class="dropdown-item" href="/accessories">Accessories</a></li>
          </ul>
        </li> */}
        <li className="nav-item nav-item2">
                                        <Link to='findnow' className='nav-links link' onClick={closeMobileMenu}>
                                                Find Now?
                                        </Link>
                                </li>

                                <li className="nav-item nav-item2 mylogin">
                                        <Link to={!user && '/login'} onClick={closeMobileMenu}>
                                        <a className="link mobile-login" onClick={handleLogout} href="#">{user ? 'LogOut' : 'Login'}</a>
                                        </Link>
                                </li>

                                <li className="nav-item nav-item2 nav-links-mobile">
                                        <Link to={!user && '/login'} onClick={closeMobileMenu}>
                                                <button className="btn btn2" onClick={handleLogout}>{user ? 'LogOut' : 'Login'}</button>
                                        </Link>
                                </li>
                        </ul>
                        
                </nav>
                




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