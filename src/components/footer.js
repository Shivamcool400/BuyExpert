import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Contactus from './pages/contactus';

function Footer() {
    
  const backtotop = () => {
    window.scrollTo(0, 0)
  }
    
        return (

  <div>

<div>
    <div className="footer-icons text-center">
      <div className="followus">Follow Us</div>
      <i class="fab fa-facebook footer-icon1"></i>
      <i class="fab fa-instagram footer-icon2"></i>
      <i class="fab fa-twitter footer-icon3"></i>
      <i class="fab fa-linkedin footer-icon4"></i>
    </div>
  </div>
  <footer className="footer">
    <div className="footer-body">
      <div className="head3">buyexperts</div>
      <div className="main-footer">
        <div className="footer-col">
          <p>EXPLORE</p>
          <div><Link to="/home" className="foot-link" onClick={backtotop}>Home</Link></div>
          <div><Link to="/aboutus" className="foot-link" onClick={backtotop}>About us</Link></div>
          <div><Link to="/contactus" className="foot-link" onClick={backtotop}>Contact us</Link></div>
          <div><Link to="/login" className="foot-link" onClick={backtotop}>Login</Link></div>
        </div>
        <div className="footer-col">
          <p>ABOUT</p>
          <div><Link to="/benefits" className="foot-link" onClick={backtotop}>Benefits</Link></div>
          <div><Link to="/ourteam" className="foot-link" onClick={backtotop}>Team</Link></div>
          <div><Link to="/faqs" className="foot-link" onClick={backtotop}>FAQs</Link></div>
        </div>
        <div className="footer-col">
          <p>LEGAL</p>
          <div><Link to="/legal" className="foot-link" onClick={backtotop}>Terms & Conditions</Link></div>
          <div><Link to="/legal" className="foot-link" onClick={backtotop}>Privacy Policy</Link></div>
          <div><Link to="/legal" className="foot-link" onClick={backtotop}>Terms of use</Link></div>
        </div>
      </div>
    </div>
    <div className="copyright text-center">&copy; buyexperts. All rights reserved</div>
  </footer>

  

  {/* <div className="copyright text-center">&copy; BUY EXPERTS. All rights reserved</div> */}

        </div>
        
        );
    }

export default Footer;