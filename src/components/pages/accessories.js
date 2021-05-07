import React, {useState,useEffect} from 'react';
import './accessories.css';
import Fire from '../../firebase';
import Dell_access_1 from './phonecomponents/dell_access/dell_access_1';
import Dell_access_2 from './phonecomponents/dell_access/dell_access_2';
import Dell_access_3 from './phonecomponents/dell_access/dell_access_3';
import Dell_access_4 from './phonecomponents/dell_access/dell_access_4';
import Dell_access_5 from './phonecomponents/dell_access/dell_access_5';
import Dell_access_6 from './phonecomponents/dell_access/dell_access_6';
import Hp_access_1 from './phonecomponents/hp_access/hp_access_1';
import Hp_access_2 from './phonecomponents/hp_access/hp_access_2';
import Hp_access_3 from './phonecomponents/hp_access/hp_access_3';
import Hp_access_4 from './phonecomponents/hp_access/hp_access_4';
import Hp_access_5 from './phonecomponents/hp_access/hp_access_5';
import Hp_access_6 from './phonecomponents/hp_access/hp_access_6';
import Samsung_access_1 from './phonecomponents/samsung_access/samsung_access_1';
import Samsung_access_2 from './phonecomponents/samsung_access/samsung_access_2';
import Samsung_access_3 from './phonecomponents/samsung_access/samsung_access_3';
import Samsung_access_4 from './phonecomponents/samsung_access/samsung_access_4';
import Samsung_access_5 from './phonecomponents/samsung_access/samsung_access_5';
import Samsung_access_6 from './phonecomponents/samsung_access/samsung_access_6';
import Bose_access_1 from './phonecomponents/bose_access/bose_access_1';
import Bose_access_2 from './phonecomponents/bose_access/bose_access_2';
import Bose_access_3 from './phonecomponents/bose_access/bose_access_3';
import Bose_access_4 from './phonecomponents/bose_access/bose_access_4';
import Bose_access_5 from './phonecomponents/bose_access/bose_access_5';
import Bose_access_6 from './phonecomponents/bose_access/bose_access_6';
import Apple_access_1 from './phonecomponents/apple_access/apple_access_1';
import Apple_access_2 from './phonecomponents/apple_access/apple_access_2';
import Apple_access_3 from './phonecomponents/apple_access/apple_access_3';
import Apple_access_4 from './phonecomponents/apple_access/apple_access_4';
import Apple_access_5 from './phonecomponents/apple_access/apple_access_5';
import Apple_access_6 from './phonecomponents/apple_access/apple_access_6';
import Apple_access_7 from './phonecomponents/apple_access/apple_access_7';
import Apple_access_8 from './phonecomponents/apple_access/apple_access_8';


function  Accessories () {

  const db = Fire.firestore();
  const [brand, setBrand] = useState([]);
  useEffect(() => {
   db.collection('accessories').onSnapshot(snapshot => (
     setBrand(snapshot.docs.map(doc => doc.data()))
   ))
   db.collection('dell_access').orderBy("price").onSnapshot(snapshot => (
    setDell(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('apple_access').orderBy("price").onSnapshot(snapshot => (
    setApple(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('samsung_access').orderBy("price").onSnapshot(snapshot => (
    setSamsung(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('hp_access').orderBy("price").onSnapshot(snapshot => (
    setHp(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('bose_access').orderBy("price").onSnapshot(snapshot => (
    setBose(snapshot.docs.map(doc => doc.data()))
  ))
 
  
  }, []);



  const [selected, setSelected] = useState('');

  const [dell,setDell] = useState([]);
  const [apple,setApple] = useState([]);
  const [samsung,setSamsung] = useState([]);
  const [bose,setBose] = useState([]);
  const [hp,setHp] = useState([]);
  const [berror,setBerror] = useState('');
  const [perror,setPerror] = useState('');
  const [gerror,setGerror] = useState('');


  const [price,setPrice] = useState('');
  const [genere,setGenere] = useState('');
  


const content = () => {
    setShow(true);
    if(selected===''){
      setBerror("This is a required field");
     }  if (price === ''){
      setPerror("This is a required field");
     }  if (genere === "") {
      setGerror("This is a required field");
     }
  }
const reset = () => {
  setSelected("");
 setShow("");
 setPrice("");
 setGenere("");
 setBerror("");
 setPerror("");
 setGerror("");
 var dropDown = document.getElementById("inputGroupSelect01");  
 dropDown.selectedIndex = 0;
}
  

  var [show,setShow] = useState(false);


  var currentarray=[];
  if(selected === "Dell"){
    currentarray= dell;
   } else if (selected === "Apple"){
     currentarray= apple;
   } else if (selected === "Bose") {
     currentarray = bose;
   } else if (selected === "Samsung"){
     currentarray = samsung;
   } else if (selected === "Hp"){
    currentarray = hp ;
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
      <img src="/access_1.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Listening to must must be fun and soothing"</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/access_2.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">" "Ideal" accessories for "ideal" devices "</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="access_3.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Go on!! Search your required Accessories!"</h5>
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
        <h2 className="msg-heading text-light">BUY EXPERTS</h2>
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
  <label className="input-group-text" htmlFor="inputGroupSelect01">Brand</label>
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
  <label className="input-group-text" htmlFor="inputGroupSelect01">Accessories</label>
  <select onChange={(e) => setGenere(e.target.value)} className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {currentarray.map((genere) => (
            <option value={genere.genere}>{genere.genere}</option>
          ))}
  </select>
</div>
<p className="errorMsg">{gerror}</p>
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
{/* middle part after clicking find */}

{/* dell */}

{selected === "Dell" && price === "below 1000" && genere === "keyboard" && show  && <>             <Dell_access_1 /><Dell_access_2 />   </>}
{selected === "Dell" && price === "1000-2000"  && genere === "keyboard" && show  && <>             <Dell_access_1 /><Dell_access_2 />   </>}
{selected === "Dell" && price === "above 2000" && genere === "keyboard" && show  && <>             <Dell_access_1 /><Dell_access_2 />   </>}

{selected === "Dell" && price === "below 1000" && genere === "mouse" && show  && <>                <Dell_access_3 /><Dell_access_4 />   </>}
{selected === "Dell" && price === "1000-2000"  && genere === "mouse" && show  && <>                <Dell_access_3 /><Dell_access_4 />   </>}
{selected === "Dell" && price === "above 2000" && genere === "mouse" && show  && <>                <Dell_access_3 /><Dell_access_4 />   </>}

{selected === "Dell" && price === "below 1000" && genere === "headphones" && show  && <>           <Dell_access_5 /><Dell_access_6 />   </>}
{selected === "Dell" && price === "1000-2000"  && genere === "headphones" && show  && <>           <Dell_access_5 /><Dell_access_6 />   </>}
{selected === "Dell" && price === "above 2000" && genere === "headphones" && show  && <>           <Dell_access_5 /><Dell_access_6 />   </>}

{/* hp */}

{selected === "Hp" && price === "below 1000" && genere === "keyboard" && show  && <>             <Hp_access_1 /><Hp_access_2 />   </>}
{selected === "Hp" && price === "1000-2000"  && genere === "keyboard" && show  && <>             <Hp_access_1 /><Hp_access_2 />   </>}
{selected === "Hp" && price === "above 2000" && genere === "keyboard" && show  && <>             <Hp_access_1 /><Hp_access_2 />   </>}

{selected === "Hp" && price === "below 1000" && genere === "mouse" && show  && <>                <Hp_access_3 /><Hp_access_4 />   </>}
{selected === "Hp" && price === "1000-2000"  && genere === "mouse" && show  && <>                <Hp_access_3 /><Hp_access_4 />   </>}
{selected === "Hp" && price === "above 2000" && genere === "mouse" && show  && <>                <Hp_access_3 /><Hp_access_4 />   </>}

{selected === "Hp" && price === "below 1000" && genere === "headphones" && show  && <>           <Hp_access_5 /><Hp_access_6 />   </>}
{selected === "Hp" && price === "1000-2000"  && genere === "headphones" && show  && <>           <Hp_access_5 /><Hp_access_6 />   </>}
{selected === "Hp" && price === "above 2000" && genere === "headphones" && show  && <>           <Hp_access_5 /><Hp_access_6 />   </>}

{/* samsung */}

{selected === "Samsung" && price === "below 1000" && genere === "headphones"   && show  && <>           <Samsung_access_1 /><Samsung_access_2 />   </>}
{selected === "Samsung" && price === "1000-2000"  && genere === "headphones"   && show  && <>           <Samsung_access_1 /><Samsung_access_2 />   </>}
{selected === "Samsung" && price === "above 2000" && genere === "headphones"   && show  && <>           <Samsung_access_1 /><Samsung_access_2 />   </>}
{selected === "Samsung" && price === "below 1000" && genere === "air buds"      && show  && <>           <Samsung_access_3 /><Samsung_access_4 />   </>}
{selected === "Samsung" && price === "1000-2000"  && genere === "air buds"      && show  && <>           <Samsung_access_3 /><Samsung_access_4 />   </>}
{selected === "Samsung" && price === "above 2000" && genere === "air buds"      && show  && <>           <Samsung_access_3 /><Samsung_access_4 />   </>}
{selected === "Samsung" && price === "below 1000" && genere === "smartwatches" && show  && <>           <Samsung_access_5 /><Samsung_access_6 />   </>}
{selected === "Samsung" && price === "1000-2000"  && genere === "smartwatches" && show  && <>           <Samsung_access_5 /><Samsung_access_6 />   </>}
{selected === "Samsung" && price === "above 2000" && genere === "smartwatches" && show  && <>           <Samsung_access_5 /><Samsung_access_6 />   </>}

{/* bose */}

{selected === "Bose" && price === "5000-10000" && genere === "earphones"   && show  && <>           <Bose_access_1 /><Bose_access_2 />   </>}
{selected === "Bose" && price === "above 10000"  && genere === "earphones"   && show  && <>         <Bose_access_1 /><Bose_access_2 />   </>}
{selected === "Bose" && price === "above 20000" && genere === "earphones"   && show  && <>          <Bose_access_1 /><Bose_access_2 />   </>}
{selected === "Bose" && price === "5000-10000" && genere === "airpods"      && show  && <>          <Bose_access_3 /><Bose_access_4 />   </>}
{selected === "Bose" && price === "above 10000"  && genere === "airpods"      && show  && <>        <Bose_access_3 /><Bose_access_4 />   </>}
{selected === "Bose" && price === "above 20000" && genere === "airpods"      && show  && <>         <Bose_access_3 /><Bose_access_4 />   </>}
{selected === "Bose" && price === "5000-10000" && genere === "speakers" && show  && <>              <Bose_access_5 /><Bose_access_6 />   </>}
{selected === "Bose" && price === "above 10000"  && genere === "speakers" && show  && <>            <Bose_access_5 /><Bose_access_6 />   </>}
{selected === "Bose" && price === "above 20000" && genere === "speakers" && show  && <>             <Bose_access_5 /><Bose_access_6 />   </>}

{/* apple */}

{selected === "Apple" && price === "1000-2000"  && genere === "keyboard" && show  && <>           <Apple_access_1 /><Apple_access_2 />   </>}
{selected === "Apple" && price === "above 2000" && genere === "keyboard" && show  && <>           <Apple_access_1 /><Apple_access_2 />   </>}
{selected === "Apple" && price === "above 5000" && genere === "keyboard" && show  && <>           <Apple_access_1 /><Apple_access_2 />   </>}
{selected === "Apple" && price === "above 10000"&& genere === "keyboard" && show  && <>           <Apple_access_3 /><Apple_access_4 />   </>}

{selected === "Apple" && price === "1000-2000"  && genere === "mouse" && show  && <>           <Apple_access_3 /><Apple_access_4 />   </>}
{selected === "Apple" && price === "above 2000" && genere === "mouse" && show  && <>           <Apple_access_3 /><Apple_access_4 />   </>}
{selected === "Apple" && price === "above 5000" && genere === "mouse" && show  && <>           <Apple_access_3 /><Apple_access_4 />   </>}
{selected === "Apple" && price === "above 10000"&& genere === "mouse" && show  && <>           <Apple_access_3 /><Apple_access_4 />   </>}

{selected === "Apple" && price === "1000-2000"  && genere === "earphones/headphones" && show  && <>           <Apple_access_5 /><Apple_access_6 />   </>}
{selected === "Apple" && price === "above 2000" && genere === "earphones/headphones" && show  && <>           <Apple_access_5 /><Apple_access_6 />   </>}
{selected === "Apple" && price === "above 5000" && genere === "earphones/headphones" && show  && <>           <Apple_access_5 /><Apple_access_6 />   </>}
{selected === "Apple" && price === "above 10000"&& genere === "earphones/headphones" && show  && <>           <Apple_access_5 /><Apple_access_6 />   </>}

{selected === "Apple" && price === "1000-2000"  && genere === "airpods" && show  && <>           <Apple_access_7 /><Apple_access_8 />   </>}
{selected === "Apple" && price === "above 2000" && genere === "airpods" && show  && <>           <Apple_access_7 /><Apple_access_8 />   </>}
{selected === "Apple" && price === "above 5000" && genere === "airpods" && show  && <>           <Apple_access_7 /><Apple_access_8 />   </>}
{selected === "Apple" && price === "above 10000"&& genere === "airpods" && show  && <>           <Apple_access_7 /><Apple_access_8 />   </>}

















<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark"># Brands We Operate</h2>
      </blockquote>
    </figure>
        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/oppo.webp" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />

          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/samsung.webp" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/oneplus.webp" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/mi.webp" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/apple.webp" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/micromax.webp" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
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
          <h5 className="card-title heading"> <b> Gaming Consoles</b> </h5> 
          <p className="card-text text-center"> "Winner winner chicken dinner!! True gamers always require  relevant choices."</p>
          <div className="wrapper-btn">
          <a className="phn" href="/gamingconsoles"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
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
          <h5 className="card-title heading"> <b>Phones</b> </h5> 
          <p className="card-text text-center">"Find the best phone which meets your required needs with our approved  guidance"</p>
          <div className="wrapper-btn">
          <a className="phn" href="/phones"><button type="button" className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div></div>
</div>


</div>

<br></br>
<br></br>

        </div>
        
         
       
        
        
        );  }
        


export default Accessories ;