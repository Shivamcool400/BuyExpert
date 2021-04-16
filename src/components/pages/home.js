import React, {Component} from 'react';
import './home.css';

class Home extends Component{
    render() {
        return(
            <div className="homebody">

            <br></br>
            <br></br>


  {/* <img src="/logo.jpeg" className="rounded mx-auto d-block img-fluid headshot mt-5" alt="..." />
  <figure className="text-center ">
    <blockquote className="blockquote ">
      <p className="h1 msg-1"><i>"Valuing Time"</i></p>
    </blockquote>
  </figure>
  <div><br /><br /></div> */}
   
  {/* <div className="text-center homehead">Our Motive...</div> */}

  {/* <div id="carouselExampleControls" className="carousel slide caro" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/homenew1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/homenew2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/homenew3.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

<video className="advideo" width="100%" height="500px" controls>
  <source src="advertisementvideo.mp4" type="video/mp4" />
  Your browser does not support HTML video.
</video>



  
  {/* <div className="row">
    <div className="col">
    </div>
    <div className="col-sm-12 col-md-8">
      <div className="thought arrangement"><p className="h1 msg ">"Ever wondered, the device you are using... Is really meeting your required needs"!!</p></div>
      <img src="/thinking.png" className="rounded img-fluid " alt="..." />
    </div>
    <div className="col">
    </div>
  </div> */}
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

  <p className="h1 text_heading ourmotivehead">Our Motive</p>

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/homenew1-1.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">Find your ideal device in just a few clicks.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/homenew2.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">Utilize your money in the best way.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="homenew3.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">Buy the best product that satisfies your needs.</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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
          <h5 className="card-title text-center"> <b>Phones</b> </h5> 
          <p className="card-text text-center"> "Find the best phone which meets your required needs with our approved  guidance"</p>  <div classname="wrapper-btn">
           <a className="phn" href="/phones"> <button type="button"  className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div> 
        </div> 
      </div>
    </div> 
    <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <img src="/gamingconsole.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center"> <b> Gaming Consoles</b> </h5> 
          <p className="card-text text-center"> "Winner winner chicken dinner!! True gamers always require  relevant choices."</p>
          <div className="wrapper-btn">
          <a className="phn" href="/gamingconsoles"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
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
          <h5 className="card-title text-center"> <b>Laptops</b> </h5> 
          <p className="card-text text-center"> "Find a genuine laptop for youself"</p> 
          <div className="wrapper-btn">
          <a className="phn" href="/laptops"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div> </div> </div>
    </div> 
    <div className="col-sm-12 col-md-4">
      <div className="card m-3">
        <img src="/accesories.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center"> <b>Accessories</b> </h5> 
          <p className="card-text text-center">"Finding the thing which is right for u buddy!</p>
          <div className="wrapper-btn">
          <a className="phn" href="/accessories"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div></div> </div>
    </div>  <div className="col"> </div>
  </div>
</div>

         );
    }
}
export default Home;