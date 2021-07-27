import React from 'react'
import './ourteam.css'

function Ourteam() {
    return (
        <div>
           <>
           <br></br>
           <blockquote className="blockquote ">
          <h2 className="text_heading text-dark team-head">Management</h2>
      </blockquote>
           <div className="row team_start">
             <div className='col'></div>
           <div className="column">
      <div className="card team-image">
        <img src="/shivam.webp" className="img-fluid" alt="shivam" />
        <div className="container">
          <h2>Shivam Gupta</h2>
          <p className="title">Founder &amp; Web Developer</p>
          {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
          <p>shivamcool400@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    
    <div className='col'></div>
    </div>
           
           <blockquote className="blockquote ">
          <h2 className="text_heading text-dark team-head">Contributors</h2>
      </blockquote>
      <div className="row team_start">
    
    <div className='col'></div>
      <div className="column">
      <div className="card team-image">
        <img src="/ravish.webp" className="img-fluid" alt="Ravish" />
        <div className="container">
          <h2>Ravish Goyal</h2>
          <p className="title">Web Developer &amp; Debugger</p>
          {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
          <p>goyalravish2001@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className='col'></div>
    </div>
  <div className="row team_start">
    
  <div className='col'></div>
    <div className="column">
      <div className="card team-image">
        <img src="/bindu.webp" className="img-fluid" alt="shivam" />
        <div className="container">
          <h2>Bindu Bharti</h2>
          <p className="title">Content Writer</p>
          {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
          <p>bindubharti264@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className='col'></div>
    </div>
    <div className="row team_start">
    <div className='col'></div>
    <div className="column">
      <div className="card team-image">
        <img src="/surmeet.webp" className="img-fluid" alt="Ravish" />
        <div className="container">
          <h2>Surmeet Kaur</h2>
          <p className="title">Content Writer</p>
         {/*  <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
          <p>surmeetsehgal@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className='col'></div>
    

  </div>
</>
 
        </div>
    )
}

export default Ourteam
