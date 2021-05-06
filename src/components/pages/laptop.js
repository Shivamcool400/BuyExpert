import React, {useState,useEffect} from 'react';
import './laptop.css';
import Fire from '../../firebase';
import Dell_1 from './phonecomponents/dell/dell_1';
import Dell_2 from './phonecomponents/dell/dell_2';
import Dell_3 from './phonecomponents/dell/dell_3';
import Dell_4 from './phonecomponents/dell/dell_4';
import Dell_5 from './phonecomponents/dell/dell_5';
import Dell_6 from './phonecomponents/dell/dell_6';
import Dell_7 from './phonecomponents/dell/dell_7';
import Dell_8 from './phonecomponents/dell/dell_8';
import Dell_9 from './phonecomponents/dell/dell_9';
import Dell_10 from './phonecomponents/dell/dell_10';
import Dell_11 from './phonecomponents/dell/dell_11';
import Dell_12 from './phonecomponents/dell/dell_12';
import Acer_1 from './phonecomponents/acer/acer_1';
import Acer_2 from './phonecomponents/acer/acer_2';
import Acer_3 from './phonecomponents/acer/acer_3';
import Acer_4 from './phonecomponents/acer/acer_4';
import Acer_5 from './phonecomponents/acer/acer_5';
import Acer_6 from './phonecomponents/acer/acer_6';
import Acer_7 from './phonecomponents/acer/acer_7';
import Acer_8 from './phonecomponents/acer/acer_8';
import Acer_9 from './phonecomponents/acer/acer_9';
import Acer_10 from './phonecomponents/acer/acer_10';
import Acer_11 from './phonecomponents/acer/acer_11';
import Acer_12 from './phonecomponents/acer/acer_12';
import Applelaps_1 from './phonecomponents/applelaps/applelaps_1';
import Applelaps_2 from './phonecomponents/applelaps/applelaps_2';
import Applelaps_3 from './phonecomponents/applelaps/applelaps_3';
import Applelaps_4 from './phonecomponents/applelaps/applelaps_4';
import Applelaps_5 from './phonecomponents/applelaps/applelaps_5';
import Applelaps_6 from './phonecomponents/applelaps/applelaps_6';
import Applelaps_7 from './phonecomponents/applelaps/applelaps_7';
import Applelaps_8 from './phonecomponents/applelaps/applelaps_8';
import Applelaps_9 from './phonecomponents/applelaps/applelaps_9';
import Applelaps_10 from './phonecomponents/applelaps/applelaps_10';
import Applelaps_11 from './phonecomponents/applelaps/applelaps_11';
import Applelaps_12 from './phonecomponents/applelaps/applelaps_12';
import Hp_1 from './phonecomponents/hp/hp_1';
import Hp_2 from './phonecomponents/hp/hp_2';
import Hp_3 from './phonecomponents/hp/hp_3';
import Hp_4 from './phonecomponents/hp/hp_4';
import Hp_5 from './phonecomponents/hp/hp_5';
import Hp_6 from './phonecomponents/hp/hp_6';
import Hp_7 from './phonecomponents/hp/hp_7';
import Hp_8 from './phonecomponents/hp/hp_8';
import Hp_9 from './phonecomponents/hp/hp_9';
import Hp_10 from './phonecomponents/hp/hp_10';
import Hp_11 from './phonecomponents/hp/hp_11';
import Hp_12 from './phonecomponents/hp/hp_12';
import Lenovo_1 from './phonecomponents/lenovo/lenovo_1';
import Lenovo_2 from './phonecomponents/lenovo/lenovo_2';
import Lenovo_3 from './phonecomponents/lenovo/lenovo_3';
import Lenovo_4 from './phonecomponents/lenovo/lenovo_4';
import Lenovo_5 from './phonecomponents/lenovo/lenovo_5';
import Lenovo_6 from './phonecomponents/lenovo/lenovo_6';
import Lenovo_7 from './phonecomponents/lenovo/lenovo_7';
import Lenovo_8 from './phonecomponents/lenovo/lenovo_8';
import Lenovo_9 from './phonecomponents/lenovo/lenovo_9';
import Lenovo_10 from './phonecomponents/lenovo/lenovo_10';
import Lenovo_11 from './phonecomponents/lenovo/lenovo_11';
import Lenovo_12 from './phonecomponents/lenovo/lenovo_12';

function Laptops () {
  const db = Fire.firestore();
  const [brand, setBrand] = useState([]);
  useEffect(() => {
   db.collection('laptop').onSnapshot(snapshot => (
     setBrand(snapshot.docs.map(doc => doc.data()))
   ))
   db.collection('dell').orderBy("price").onSnapshot(snapshot => (
    setDell(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('acer').orderBy("price").onSnapshot(snapshot => (
    setAcer(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('applelaps').orderBy("price").onSnapshot(snapshot => (
    setApplelaps(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('lenovo').orderBy("price").onSnapshot(snapshot => (
    setLenovo(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('hp').orderBy("price").onSnapshot(snapshot => (
    setHp(snapshot.docs.map(doc => doc.data()))
  ))
 
  
  }, []);



  const [selected, setSelected] = useState('');

  const [dell,setDell] = useState([]);
  const [applelaps,setApplelaps] = useState([]);
  const [lenovo,setLenovo] = useState([]);
  const [acer,setAcer] = useState([]);
  const [hp,setHp] = useState([]);
  const [berror,setBerror] = useState('');
  const [perror,setPerror] = useState('');
  const [gerror,setGerror] = useState('');
  const [rerror,setRerror] = useState('');



  const [price,setPrice] = useState('');
  const [genere,setGenere] = useState('');
  const [ram,setRam] = useState('');


const content = () => {
    setShow(true);
    if(selected===''){
      setBerror("This is a required field");
     }  if (price === ''){
      setPerror("This is a required field");
     }  if (genere === "") {
      setGerror("This is a required field");
     }  if (ram === ""){
      setRerror("This is a required field");
     }
  }
const reset = () => {
  setSelected("");
 setShow("");
 setPrice("");
 setGenere("");
 setRam("");
 setBerror("");
 setPerror("");
 setGerror("");
 setRerror("");
 var dropDown = document.getElementById("inputGroupSelect01");  
 dropDown.selectedIndex = 0;
}
  

  var [show,setShow] = useState(false);


  var currentarray=[];
  if(selected === "Dell"){
    currentarray= dell;
   } else if (selected === "Lenovo"){
     currentarray= lenovo;
   } else if (selected === "Apple") {
     currentarray = applelaps;
   } else if (selected === "Acer"){
     currentarray = acer;
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
      <img src="/laptop_1.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Coding in a better way with the "ideal" choice!"</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/laptop_2.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Gaming must be smooth and fun."</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="laptop_3.webp" class="d-block w-100" alt="..." />
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
            <h2 className="msg-heading text-light">BUY IDEAL</h2>
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
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Brand</label>
  <select onChange={(e) => setSelected(e.target.value)} className="form-select" id="inputGroupSelect01">
    
    <option selected value="1">Choose...</option>
          {brand.map((brand) => (
            <option value={brand.name} key={brand.name}>{brand.name}</option>
          ))}
  </select>
</div>
<p className="errorMsg">{berror}</p>
</div>
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
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
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Genere</label>
  <select onChange={(e) => setGenere(e.target.value)} className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {currentarray.map((genere) => (
            <option value={genere.genere}>{genere.genere}</option>
          ))}
  </select>
</div>
<p className="errorMsg">{gerror}</p>
</div>
           <div className="col-sm-12 col-md-3"><div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01">Ram/ Graphic card</label>
  <select onChange={(e) => setRam(e.target.value)} className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    {currentarray.map((ramstorage) => (
            <option value={ramstorage.ramstorage}>{ramstorage.ramstorage}</option>
          ))}
  </select>
</div>
<p className="errorMsg">{rerror}</p>
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

{selected === "Dell" && price === "20000-30000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
{selected === "Dell" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_1 /><Dell_2 /> <Dell_3/>  </>}
 
{selected === "Dell" && price === "30000-40000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}
{selected === "Dell" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_4 /><Dell_5 /> <Dell_6/>  </>}

{selected === "Dell" && price === "40000-50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}
{selected === "Dell" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_7 /><Dell_8 /> <Dell_9/>  </>}

{selected === "Dell" && price === "above 50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}
{selected === "Dell" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Dell_10 /><Dell_11 /> <Dell_12/>  </>}

{/* acer */}

{selected === "Acer" && price === "20000-30000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
{selected === "Acer" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_1 /><Acer_2 /> <Acer_3/>  </>}
 
{selected === "Acer" && price === "30000-40000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}
{selected === "Acer" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_4 /><Acer_5 /> <Acer_6/>  </>}

{selected === "Acer" && price === "40000-50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}
{selected === "Acer" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_7 /><Acer_8 /> <Acer_9/>  </>}

{selected === "Acer" && price === "above 50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}
{selected === "Acer" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Acer_10 /><Acer_11 /> <Acer_12/>  </>}


{/* apple laps */}

{selected === "Apple" && price === "20000-30000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
{selected === "Apple" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_1 /><Applelaps_2 /> <Applelaps_3/>  </>}
 
{selected === "Apple" && price === "30000-40000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}
{selected === "Apple" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_4 /><Applelaps_5 /> <Applelaps_6/>  </>}

{selected === "Apple" && price === "40000-50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}
{selected === "Apple" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_7 /><Applelaps_8 /> <Applelaps_9/>  </>}

{selected === "Apple" && price === "above 50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Applelaps_10 /><Applelaps_11 /> <Applelaps_12/>  </>}


{/* hp  */}

{selected === "Hp" && price === "20000-30000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
{selected === "Hp" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_1 /><Hp_2 /> <Hp_3/>  </>}
 
{selected === "Hp" && price === "30000-40000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}
{selected === "Hp" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_4 /><Hp_5 /> <Hp_6/>  </>}

{selected === "Hp" && price === "40000-50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}
{selected === "Hp" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_7 /><Hp_8 /> <Hp_9/>  </>}

{selected === "Hp" && price === "above 50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}
{selected === "Hp" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Hp_10 /><Hp_11 /> <Hp_12/>  </>}



{/* lenovo */}

{selected === "Lenovo" && price === "20000-30000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
{selected === "Lenovo" && price === "20000-30000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_1 /><Lenovo_2 /> <Lenovo_3/>  </>}
 
{selected === "Lenovo" && price === "30000-40000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}
{selected === "Lenovo" && price === "30000-40000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_4 /><Lenovo_5 /> <Lenovo_6/>  </>}

{selected === "Lenovo" && price === "40000-50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}
{selected === "Lenovo" && price === "40000-50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_7 /><Lenovo_8 /> <Lenovo_9/>  </>}

{selected === "Lenovo" && price === "above 50000" && genere === "gaming" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "normal" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "speedy" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "coding" && show && ram === "4-6gb and 2-4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "normal" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "speedy" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "gaming" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "coding" && show && ram === "6-8gb above 4gb graphic card" && <>           <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 6gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "speedy" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "gaming" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "normal" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}
{selected === "Lenovo" && price === "above 50000" && genere === "coding" && show && ram === "above 8gb above 8gb graphic card" && <>       <Lenovo_10 /><Lenovo_11 /> <Lenovo_12/>  </>}











































<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark"># Brands We Operate</h2>
      </blockquote>
    </figure>
        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/dell.webp" className="rounded mx-auto d-block w-40 h-50" alt="..." />

          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/samsung.webp" className="rounded mx-auto d-block w-50 h-70" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/apple.webp" className="rounded mx-auto d-block w-50 h-70" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/hp.webp" className="rounded mx-auto d-block w-40 h-60" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/lenovo.webp" className="rounded mx-auto d-block w-40 h-60" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/acer.webp" className="rounded mx-auto d-block w-40 h-60" alt="..." />
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
          <h5 className="card-title heading"> <b>Phones</b> </h5> 
          <p className="card-text text-center"> "Find the best phone which meets your required needs with our approved  guidance"</p>  <div classname="wrapper-btn">
           <a className="phn" href="/phones"> <button type="button"  className="btn btn-lg btn-outline-secondary mainbtn">Find!</button></a>
          </div> 
        </div> 
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
        


export default Laptops ;