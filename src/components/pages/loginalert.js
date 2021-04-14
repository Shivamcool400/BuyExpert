import React from 'react'

function Loginalert() {
    return (
        <div>
            <div className="container">
    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="text_heading">"You need to be Logged in to view the content!"</h2>
      </blockquote>
    </figure>
  </div>
  <div className="wrapper-btn">
          <a className="phn" href="/login"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Login </button></a>
          </div>
        </div>
    )
}

export default Loginalert
