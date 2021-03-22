import React, {Component} from 'react';
import './home.css';

class Home extends Component{
    render() {
        return(
            <>
  <img src="/logo.jpeg" className="rounded mx-auto d-block img-fluid headshot mt-5" alt="..." />
  <figure className="text-center ">
    <blockquote className="blockquote ">
      <p className="h1 msg-1"><i>"Valuing Time"</i></p>
    </blockquote>
  </figure>
  <div><br /><br /></div>
  
  <div className="row">
    <div className="col">
    </div>
    <div className="col-sm-12 col-md-8">
      <div className="thought arrangement"><p className="h1 msg ">"Ever wondered, the device you are using... Is really meeting your required needs"!!</p></div>
      <img src="/thinking.png" className="rounded img-fluid " alt="..." />
    </div>
    <div className="col">
    </div>
  </div>
  <div className="container">
    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="text_heading">"The Problems You Faced"</h2>
      </blockquote>
    </figure>
  </div>
  <div className="row">
    <div className="col"> </div> 
    <div className="col-sm-12 col-md-4">
      <div className="card m-3 ">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> "Finding a desired phone these days is difficult and time consuming </p> 
            <footer className="blockquote-footer "> "Rohit Mishra" <cite title="Source Title"></cite></footer>
          </blockquote> 
        </div> </div>
    </div> <div className="col-sm-12 col-md-4">
      <div className="card m-3 ">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> "I needed a gaming phone under 20,000, but found the wrong one!" </p> 
            <footer className="blockquote-footer"> "Rakesh Goyal <cite title="Source Title"></cite></footer>
          </blockquote> </div> </div>
    </div>  <div className="col"> </div>
  </div>
  <div className="row">
    <div className="col"> </div> <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> "Searched thousand of videos on youtube, but which one to follow to buy a laptop" </p> 
            <footer className="blockquote-footer"> "Preeti Chauhan" <cite title="Source Title"></cite></footer>
          </blockquote> 
        </div> </div>
    </div> 
    <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p> "Can't find the cheapest website to get my phone in a fairer price" </p> 
            <footer className="blockquote-footer">"Laksaya Anand"<cite title="Source Title" /></footer>
          </blockquote> </div> </div>
    </div>  <div className="col"> </div>
  </div>
  <div className="container">
    <figure className="text-center ">
      <blockquote className="blockquote ">
        <a className=" abc" href="contactus"><p className="h1 text_heading">Don't Worry</p></a> 
      </blockquote>
    </figure></div>
  <div><br /><br /></div>
  <div className="container">
    <figure className="text-center ">
      <blockquote className="blockquote ">
        <a className=" abc" href="/aboutus">
          <p className="h1 text_heading">Find #whatYouWant</p></a>
      </blockquote>
    </figure>
  </div>
  <div className="container">
    <figure className="text-center ">
      <blockquote className="blockquote ">
        <p className="h1 text_heading">Explore #ChooseYourRequiredDevice</p>
      </blockquote>
    </figure>
  </div>
  <div className="row">
    <div className="col"> </div> <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <img src="/phone.jpg" className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title"> <b>Phones</b> </h5> 
          <p className="card-text text-center"> "Find the best phone which meets your required needs with our approved  guidance"</p>  <div classname="wrapper-btn">
            <button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button>
          </div> 
        </div> 
      </div>
    </div> 
    <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <img src="/gamingconsole.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> <b> Gaming Consoles</b> </h5> 
          <p className="card-text text-center"> "Winner winner chicken dinner!! True gamers always require  relevant choices."</p>
          <div className="wrapper-btn">
            <button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button>
          </div></div> 
      </div>
    </div> 
    <div className="col"> </div>
  </div>
  <div className="row">
    <div className="col"> </div> 
    <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <img src="/laptop.jpg" className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title"> <b>Laptops</b> </h5> 
          <p className="card-text text-center"> "Find a genuine laptop for youself"</p> 
          <div className="wrapper-btn">
            <button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button>
          </div> </div> </div>
    </div> 
    <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <img src="/accesories.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> <b>Accessories</b> </h5> 
          <p className="card-text text-center">"Finding the thing which is right for u buddy!</p>
          <div className="wrapper-btn">
            <button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button>
          </div></div> </div>
    </div>  <div className="col"> </div>
  </div>
</>

         );
    }
}
export default Home;