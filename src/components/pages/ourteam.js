import React from 'react'
import './ourteam.css'

function Ourteam() {
    return (
        <div>
           <>
           <blockquote className="blockquote ">
          <h2 className="text_heading text-dark team-head">Our Team</h2>
      </blockquote>
  <div className="row team_start">
    <div className="column">
      <div className="card team-image">
        <img src="/shivam.jpg" alt="shivam" />
        <div className="container">
          <h2>Shivam Gupta</h2>
          <p className="title">Founder &amp; Web Developer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>shivamcool400@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card team-image">
        <img src="/ravish.jpg" alt="Ravish" />
        <div className="container">
          <h2>Ravish Goyal</h2>
          <p className="title">Web Developer &amp; Debugger</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>goyalravish2001@gmail.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card team-image">
        <img src="/bral.jpeg" alt="bral" />
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
