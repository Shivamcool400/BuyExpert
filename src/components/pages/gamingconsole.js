import React, {useState,useEffect} from 'react';
import './gamingconsole.css';
import Fire from '../../firebase';
import Xbox_1 from './phonecomponents/xbox/xbox_1';
import Xbox_2 from './phonecomponents/xbox/xbox_2';
import Xbox_3 from './phonecomponents/xbox/xbox_3';
import Xbox_4 from './phonecomponents/xbox/xbox_4';
import Playstation_1 from './phonecomponents/playstation/playstation_1';
import Playstation_2 from './phonecomponents/playstation/playstation_2';
import Playstation_3 from './phonecomponents/playstation/playstation_3';
import Playstation_4 from './phonecomponents/playstation/playstation_4';

 function Gamingconsoles () {
  const db = Fire.firestore();
  const [brand, setBrand] = useState([]);
  useEffect(() => {
   db.collection('gamingconsole').onSnapshot(snapshot => (
     setBrand(snapshot.docs.map(doc => doc.data()))
   ))
   db.collection('xbox').orderBy("price").onSnapshot(snapshot => (
    setXbox(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('playstation').orderBy("price").onSnapshot(snapshot => (
    setPs(snapshot.docs.map(doc => doc.data()))
  ))
  alert("The site is under development mode! so the reviews may be repetitive or inappropriate in some Sections. we are constantly working to provide you the best recommendations earliest! Team buyexperts")
 }, []);



  const [selected, setSelected] = useState('');

  const [xbox,setXbox] = useState([]);
  const [ps,setPs] = useState([]);
  const [berror,setBerror] = useState('');
  const [perror,setPerror] = useState('');
  

  const [price,setPrice] = useState('');
  


const content = () => {
    setShow(true);
    if(selected===''){
      setBerror("This is a required field");
     }  if (price === ''){
      setPerror("This is a required field");
     }
  }
const reset = () => {
  setSelected("");
  setPrice("");
 setShow("");
 setBerror("");
 setPerror("");
 var dropDown = document.getElementById("inputGroupSelect01");  
 dropDown.selectedIndex = 0;
}
  

  var [show,setShow] = useState(false);


  var currentarray=[];
  if(selected === "Xbox"){
    currentarray= xbox;
   } else if (selected === "Playstation"){
     currentarray= ps;
   } 
  


   
        return(
            <div>
{/* casoroul */}

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/gaming_1.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"True gamers needs a "ideal" choice!"</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/gaming_2.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Gaming must be smooth and fun."</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="gaming_3.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Go on!! Search your required device!"</h5>
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
<div className="container" className="back-2 bg-dark">
            
        <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-light">buyexperts</h2>
      </blockquote>
    </figure>
    <figure className="text-center ">
    <blockquote className="blockquote ">
      <p className="h1 msg-3 text-white">Always Working on Providing The best Support To Our Users And The Subscribers. We Are Commited To You And Will Not Leave Any Stone Unturned Until You Find A Phone Meeting Your Desired Needs.</p>
    </blockquote>
  </figure>
<br></br>
<br></br>
        </div>
























        <div className="container" className="back">
          <br></br>
          <br></br>
          <br></br>
            <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading">Find Your Device ?</h2>
      </blockquote>
    </figure>
    <br></br>
    <br></br>
    <div className="row">
           <div className="col-sm"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Gaming Consoles</label>
  <select onChange={(e) => setSelected(e.target.value)} className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {brand.map((brand) => (
            <option value={brand.name} key={brand.name}>{brand.name}</option>
          ))}
  </select>
  </div>
  <p className="errorMsg">{berror}</p>
  </div>

          <div className="col-sm"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Price-range</label>
  <select onChange={(e) => setPrice(e.target.value)} className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {currentarray.map((price) => (
            <option value={price.price}>{price.price}</option>
          ))}
  </select>
</div>
<p className="errorMsg">{perror}</p>
</div>
           
          
</div>
<div className="">
{ show ? <button type="button" onClick={reset} className="btn  btn-primary btn-outline-secondary btn-lg find-btn"> Reset! </button> 
  :
  <button type="button" onClick={content} className="btn  btn-primary btn-outline-secondary btn-lg find-btn"> Find! </button>
  }
          </div>
          <br></br>
          <br></br>
</div>
{/* middle part */}

{/* xbox */}

{selected === "Xbox" && price === "20000-30000"  && show  && <> <Xbox_1 /><Xbox_2 />   </>}
{selected === "Xbox" && price === "above 30000"  && show  && <> <Xbox_3 /><Xbox_4 />  </>}

{/* playstation */}

{selected === "Playstation" && price === "20000-30000"  && show  && <> <Playstation_1 /><Playstation_2 />   </>}
{selected === "Playstation" && price === "above 30000"  && show  && <> <Playstation_3 /><Playstation_4 />  </>}











































<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark"># Brands We Operate</h2>
      </blockquote>
    </figure>
        <div className="row">
          <div className="col image">
          <img src="/microsoft.webp" className="rounded mx-auto d-block w-40 h-60 image" alt="..." />

          </div>
          <div className="col image">
          <img src="/sony.webp" className="rounded mx-auto d-block w-40 h-60 image" alt="..." />
          </div>
          
        </div>

        

        <br></br>
        <br></br>

        
       
      <br></br>
      <br></br>
      <br></br>
      <br></br>
       

       <div className="container" className="shift">
    <figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="heading-2">Looking for something else ?</h2>
      </blockquote>
    </figure>
  </div>
<br></br>
<br></br>
  <div className="row">

<div className="col-sm-12 col-md-4 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
          <h5 className="card-title heading"> <b>Phones</b> </h5> 
          <p className="card-text text-center"> "Find the best phone which meets your required needs with our approved  guidance"</p>
          <div className="wrapper-btn">
          <a className="phn" href="/phones"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div></div> 
</div>
<div className="col-sm-12 col-md-4 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
          <h5 className="card-title heading"> <b>Laptops</b> </h5> 
          <p className="card-text text-center"> "Find a genuine laptop for youself"</p> 
          <div className="wrapper-btn">
          <a className="phn" href="/laptops"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div> </div>
</div>
<div className="col-sm-12 col-md-4 shadow p-3 mb-5 bg-white rounded">
<div className="card-body">
          <h5 className="card-title heading"> <b>Accessories</b> </h5> 
          <p className="card-text text-center">"Finding the thing which is right for u buddy!</p>
          <div className="wrapper-btn">
          <a className="phn" href="/accessories"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div></div>
</div>


</div>

<br></br>
<br></br>

        </div>
        
         
       
        
        
        );  }
        


export default Gamingconsoles ;