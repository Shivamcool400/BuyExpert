import React, {Component} from 'react';
import './aboutus.css'


class Aboutus extends Component{
    render() {
        return(
        
            <div className="body">
            <h1 className="heading">About Us</h1>
            <div className="box">
      
              <div className="item1 shadow p-3 mb-5 bg-white rounded">
                <div>
                  <img src="/ourvision.jpg" alt="Our Vision" className="image1" />
                </div>
                <div className="para1">
                  <h3>Our Vision</h3>
                  <p>Buy ideal's vision is to be the technical advancement in the nation. Due to an increase in demands of advance gadgets, we as a company visualise suggesting you no complain technology in subsequent era. As of now, many of us are having choice issues, so we come down as a solution to all your choice issues. We aim at helping you, pick up an ideal choice and at the same time recommending you a complain free technology.</p>
                </div>
      
              </div>
      
              <div className="item2 shadow p-3 mb-5 bg-white rounded">
                <div>
                  <img src="/ourapproach.jpg" alt="Our Approach" className="image2" /></div>
                <div className="para2">
                  <h3>Our Approach</h3>
                  <p>Buyideal, approaching to its major goals provide you with a single platform to pick up the best technology based upon our researches, be it be mobile phones, laptops or other useful gadgets. Our approach to contend with your choices utilizes a lot of researches. Stepping into buyideal will let you have a sight on all kinds of mobile phones, laptops and other available gadgets. Keeping your budget specifications and other criterias in mind, we ensure helping you in making the finest deal.</p>
                </div>
              </div>
      
              <div className="item3 shadow p-3 mb-5 bg-white rounded">
                <div>
                  <img src="/ourprocess.jpg" alt="Our Process" className="image3" /></div>
                <div className="para3">
                  <h3>Our Values</h3>
                  <p>In today's world, we believe in communicating and working transparently following integrity. Being involve in a business, we are very much passionate about meeting our customer's requirement. We work as team and are accountable for all our actions and we are dedicated to achieve our goals with a token of respect for each other.</p>
                </div>
              </div>
      
      
            </div>


      
           
          </div>
        
        
        ); } }
        


export default Aboutus ;