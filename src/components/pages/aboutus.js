import React, {Component} from 'react';
import './aboutus.css'
import Ourteam from './ourteam';


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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum laudantium eos, dolorem soluta facilis officiis culpa excepturi atque sunt consectetur recusandae eveniet doloremque corporis labore aliquam inventore in quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae iusto quis. Omnis voluptate quidem sint veniam, dolorem aliquam accusantium totam. Reprehenderit dolores facilis beatae tenetur, autem perspiciatis amet temporibus?</p>
                </div>
              </div>
      
              <div className="item2 shadow p-3 mb-5 bg-white rounded">
                <div>
                  <img src="/ourapproach.jpg" alt="Our Approach" className="image2" /></div>
                <div className="para2">
                  <h3>Our Approach</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum laudantium eos, dolorem soluta facilis officiis culpa excepturi atque sunt consectetur recusandae eveniet doloremque corporis labore aliquam inventore in quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae iusto quis. Omnis voluptate quidem sint veniam, dolorem aliquam accusantium totam. Reprehenderit dolores facilis beatae tenetur, autem perspiciatis amet temporibus?</p>
                </div>
              </div>
      
              <div className="item3 shadow p-3 mb-5 bg-white rounded">
                <div>
                  <img src="/ourprocess.jpg" alt="Our Process" className="image3" /></div>
                <div className="para3">
                  <h3>Our Process</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum laudantium eos, dolorem soluta facilis officiis culpa excepturi atque sunt consectetur recusandae eveniet doloremque corporis labore aliquam inventore in quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repudiandae iusto quis. Omnis voluptate quidem sint veniam, dolorem aliquam accusantium totam. Reprehenderit dolores facilis beatae tenetur, autem perspiciatis amet temporibus?</p>
                </div>
              </div>
      
      
            </div>

      
      <Ourteam/>
      
           
          </div>
        
        
        ); } }
        


export default Aboutus ;