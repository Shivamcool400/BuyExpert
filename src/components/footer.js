import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Contactus from './pages/contactus'

class Footer extends Component{
    render() {
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
      <div className="head3">BuyExperts</div>
      <div className="main-footer">
        <div className="footer-col">
          <p>EXPLORE</p>
          <div><Link to="/home" className="foot-link">Home</Link></div>
          <div><Link to="/aboutus" className="foot-link">About us</Link></div>
          <div><Link to="/contactus" className="foot-link">Contact us</Link></div>
          <div><Link to="/login" className="foot-link">Login</Link></div>
        </div>
        <div className="footer-col">
          <p>ABOUT</p>
          <div><Link to="/login" className="foot-link">Our story</Link></div>
          <div><Link to="/login" className="foot-link">Benefits</Link></div>
          <div><Link to="/login" className="foot-link">Team</Link></div>
          <div><Link to="/login" className="foot-link">Careers</Link></div>
        </div>
        <div className="footer-col">
          <p>LEGAL</p>
          <div><Link to="/login" className="foot-link">Terms & Conditions</Link></div>
          <div><Link to="/login" className="foot-link">Privacy Policy</Link></div>
          <div><Link to="/login" className="foot-link">Terms of use</Link></div>
        </div>
      </div>
    </div>
    <div className="copyright text-center">&copy; BUY EXPERTS. All rights reserved</div>
  </footer>

  

  {/* <div className="copyright text-center">&copy; BUY EXPERTS. All rights reserved</div> */}

        </div>
        
        );
    }
}
export default Footer;