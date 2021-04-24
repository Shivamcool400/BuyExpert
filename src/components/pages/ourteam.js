import React from 'react'
import './ourteam.css'

function Ourteam() {
    return (
        <div>
           <>
           <blockquote className="blockquote ">
          <h2 className="text_heading text-dark">Our Team</h2>
      </blockquote>
  <div className="row">
    <div className="column">
      <div className="card">
        <img src="/shivam.jpg" alt="shivam" style={{width: '100%'}} />
        <div className="container">
          <h2>Shivam Gupta</h2>
          <p className="title">Founder&amp; Backend/Frontend Developer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>Shivamcool400@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src="/w3images/team2.jpg" alt="Mike" style={{width: '100%'}} />
        <div className="container">
          <h2>Mike Ross</h2>
          <p className="title">Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card">
        <img src="/bral.jpeg" alt="bral" style={{width: '100%'}} />
        <div className="container">
          <h2>Anurag Bral</h2>
          <p className="title">Data Manager and Analyzer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>Bral@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</>
 
        </div>
    )
}

export default Ourteam
