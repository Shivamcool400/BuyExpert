import React, {Component} from 'react';
import './footer.css';
import Contactus from './pages/contactus'

class Footer extends Component{
    render() {
        return (

  <div>
  <footer className="footer">
    <div className="footer-body">
      <div className="head3">BuyExperts</div>
      <div className="main-footer">
        <div className="footer-col">
          <p>EXPLORE</p>
          <div>Home</div>
          <div>About us</div>
          <div>Contact us</div>
          <div>Login</div>
        </div>
        <div className="footer-col">
          <p>ABOUT</p>
          <div>Our story</div>
          <div>Benefits</div>
          <div>Team</div>
          <div>Careers</div>
        </div>
        <div className="footer-col">
          <p>LEGAL</p>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Terms of use</div>
        </div>
      </div>
    </div>
    <div className="copyright text-center">&copy; BUY EXPERTS. All rights reserved</div>
  </footer>

  <div>
    <div className="footer-icons text-center">
      <i class="fab fa-facebook footer-icon1"></i>
      <i class="fab fa-instagram footer-icon2"></i>
      <i class="fab fa-twitter footer-icon3"></i>
      <i class="fab fa-linkedin footer-icon4"></i>
    </div>
  </div>

  {/* <div className="copyright text-center">&copy; BUY EXPERTS. All rights reserved</div> */}

        </div>
        
        );
    }
}
export default Footer;