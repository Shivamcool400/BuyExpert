import React, {useState, useEffect, Component} from 'react';
import './phone.css';
import Fire from '../../firebase';
import Oneplus_1 from './phonecomponents/oneplus/oneplus_1';
import Oneplus_2 from './phonecomponents/oneplus/oneplus_2';
import Oneplus_3 from './phonecomponents/oneplus/oneplus_3';
import Oneplus_4 from './phonecomponents/oneplus/oneplus_4';
import Oneplus_5 from './phonecomponents/oneplus/oneplus_5';
import Oneplus_6 from './phonecomponents/oneplus/oneplus_6';
import Oneplus_7 from './phonecomponents/oneplus/oneplus_7';
import Oneplus_8 from './phonecomponents/oneplus/oneplus_8';
import Oneplus_9 from './phonecomponents/oneplus/oneplus_9';
import Apple_1 from './phonecomponents/apple/apple_1';
import Apple_2 from './phonecomponents/apple/apple_2';
import Apple_3 from './phonecomponents/apple/apple_3';
import Apple_4 from './phonecomponents/apple/apple_4';
import Apple_5 from './phonecomponents/apple/apple_5';
import Apple_6 from './phonecomponents/apple/apple_6';
import Apple_7 from './phonecomponents/apple/apple_7';
import Apple_8 from './phonecomponents/apple/apple_8';
import Apple_9 from './phonecomponents/apple/apple_9';
import Samsung_1 from './phonecomponents/samsung/samsung_1';
import Samsung_2 from './phonecomponents/samsung/samsung_2';
import Samsung_3 from './phonecomponents/samsung/samsung_3';
import Samsung_4 from './phonecomponents/samsung/samsung_4';
import Samsung_5 from './phonecomponents/samsung/samsung_5';
import Samsung_6 from './phonecomponents/samsung/samsung_6';
import Samsung_7 from './phonecomponents/samsung/samsung_7';
import Samsung_8 from './phonecomponents/samsung/samsung_8';
import Samsung_9 from './phonecomponents/samsung/samsung_9';
import Samsung_12 from './phonecomponents/samsung/samsung_12';
import Samsung_11 from './phonecomponents/samsung/samsung_11';
import Samsung_10 from './phonecomponents/samsung/samsung_10';
import Realme_1 from './phonecomponents/realme/realme_1';
import Realme_2 from './phonecomponents/realme/realme_2';
import Realme_3 from './phonecomponents/realme/realme_3';
import Realme_4 from './phonecomponents/realme/realme_4';
import Realme_5 from './phonecomponents/realme/realme_5';
import Realme_6 from './phonecomponents/realme/realme_6';
import Realme_7 from './phonecomponents/realme/realme_7';
import Realme_8 from './phonecomponents/realme/realme_8';
import Realme_9 from './phonecomponents/realme/realme_9';
import Xiaomi_1 from './phonecomponents/xiaomi/xiaomi_1';
import Xiaomi_2 from './phonecomponents/xiaomi/xiaomi_2';
import Xiaomi_3 from './phonecomponents/xiaomi/xiaomi_3';
import Xiaomi_4 from './phonecomponents/xiaomi/xiaomi_4';
import Xiaomi_5 from './phonecomponents/xiaomi/xiaomi_5';
import Xiaomi_6 from './phonecomponents/xiaomi/xiaomi_6';
import Xiaomi_7 from './phonecomponents/xiaomi/xiaomi_7';
import Xiaomi_8 from './phonecomponents/xiaomi/xiaomi_8';
import Xiaomi_9 from './phonecomponents/xiaomi/xiaomi_9';
import Oppo_1 from './phonecomponents/oppo/oppo_1';
import Oppo_2 from './phonecomponents/oppo/oppo_2';
import Oppo_3 from './phonecomponents/oppo/oppo_3';
import Oppo_4 from './phonecomponents/oppo/oppo_4';
import Oppo_5 from './phonecomponents/oppo/oppo_5';
import Oppo_6 from './phonecomponents/oppo/oppo_6';
import Oppo_7 from './phonecomponents/oppo/oppo_7';
import Oppo_8 from './phonecomponents/oppo/oppo_8';
import Oppo_9 from './phonecomponents/oppo/oppo_9';
import Vivo_1 from './phonecomponents/vivo/vivo_1';
import Vivo_2 from './phonecomponents/vivo/vivo_2';
import Vivo_3 from './phonecomponents/vivo/vivo_3';
import Vivo_4 from './phonecomponents/vivo/vivo_4';
import Vivo_5 from './phonecomponents/vivo/vivo_5';
import Vivo_6 from './phonecomponents/vivo/vivo_6';
import Vivo_7 from './phonecomponents/vivo/vivo_7';
import Vivo_8 from './phonecomponents/vivo/vivo_8';
import Vivo_9 from './phonecomponents/vivo/vivo_9';


function Phones () {
  const db = Fire.firestore();
  const [brand, setBrand] = useState([]);
  useEffect(() => {
   db.collection('brand').onSnapshot(snapshot => (
     setBrand(snapshot.docs.map(doc => doc.data()))
   ))
   db.collection('oneplus').orderBy("price").onSnapshot(snapshot => (
    setOneplus(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('samsung').orderBy("price").onSnapshot(snapshot => (
    setSamsung(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('apple').orderBy("price").onSnapshot(snapshot => (
    setApple(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('realme').orderBy("price").onSnapshot(snapshot => (
    setRealme(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('oppo').orderBy("price").onSnapshot(snapshot => (
    setOppo(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('vivo').orderBy("price").onSnapshot(snapshot => (
    setVivo(snapshot.docs.map(doc => doc.data()))
  ))
  db.collection('xiaomi').orderBy("price").onSnapshot(snapshot => (
    setXiaomi(snapshot.docs.map(doc => doc.data()))
  ))
  
  }, []);
  const [selected, setSelected] = useState('');

  const [oneplus,setOneplus] = useState([]);
  const [samsung,setSamsung] = useState([]);
  const [apple,setApple] = useState([]);
  const [realme,setRealme] = useState([]);
  const [vivo,setVivo] = useState([]);
  const [oppo,setOppo] = useState([]);
  const [xiaomi,setXiaomi] = useState([]);
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
  if(selected === "oneplus"){
    currentarray= oneplus;
   } else if (selected === "samsung"){
     currentarray= samsung;
   } else if (selected === "Apple") {
     currentarray = apple;
   } else if (selected === "realme"){
     currentarray = realme;
   } else if (selected === "vivo"){
    currentarray = vivo;
  } else if (selected === "oppo"){
    currentarray = oppo;
  } else if (selected === "xiaomi"){
    currentarray = xiaomi;
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
      <img src="/phone_1.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Your Smiling Moments needs to be Captured in a Right Device!"</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="/phone_2.webp" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5 className="caption">"Gaming must be smooth and fun."</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="phone_3.webp" class="d-block w-100" alt="..." />
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





















{/* find one  */}
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
  <label className="input-group-text" htmlFor="inputGroupSelect01">Ram/Storage</label>
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


{/* oneplus above 30000 */}
{selected === "oneplus" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 64gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 64gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 64gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "speedy" && show && ram === "8gb above 128gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "gaming" && show && ram === "8gb above 128gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}
{selected === "oneplus" && price === "above 30000" && genere === "normal" && show && ram === "8gb above 128gb storage" && <> <Oneplus_1 /><Oneplus_2 /> <Oneplus_3/>  </>}




{/*oneplus above 40000  */}
{selected === "oneplus" && price === "above 40000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "normal" && show && ram === "6gb above 64gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "speedy" && show && ram === "6gb above 64gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "gaming" && show && ram === "6gb above 64gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "speedy" && show && ram === "8gb above 128gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "gaming" && show && ram === "8gb above 128gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}
{selected === "oneplus" && price === "above 40000" && genere === "normal" && show && ram === "8gb above 128gb storage" && <> <Oneplus_4 /><Oneplus_5 /> <Oneplus_6/>  </>}


{/* one plus above 20000 */}

{selected === "oneplus" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 64gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 64gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 64gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "speedy" && show && ram === "8gb above 128gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "gaming" && show && ram === "8gb above 128gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}
{selected === "oneplus" && price === "above 20000" && genere === "normal" && show && ram === "8gb above 128gb storage" && <> <Oneplus_7 /><Oneplus_8 /> <Oneplus_9/>  </>}

{/* apple above 30000 */}

{selected === "Apple" && price === "above 30000" && genere === "gaming" && show && ram === "above 64gb storage" && <> <Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "normal" && show && ram === "above 64gb storage" && <> <Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "speedy" && show && ram === "above 64gb storage" && <> <Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "normal" && show && ram === "above 128gb storage" && <><Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "speedy" && show && ram === "above 128gb storage" && <><Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "gaming" && show && ram === "above 128gb storage" && <><Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "speedy" && show && ram === "above 256gb storage" && <>  <Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "gaming" && show && ram === "above 256gb storage" && <>  <Apple_1 /><Apple_2 /> <Apple_3/>  </>}
{selected === "Apple" && price === "above 30000" && genere === "normal" && show && ram === "above 256gb storage" && <>  <Apple_1 /><Apple_2 /> <Apple_3/>  </>}

{/* apple above 40000 */}

{selected === "Apple" && price === "above 40000" && genere === "gaming" && show && ram === "above 64gb storage" && <> <Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "normal" && show && ram === "above 64gb storage" && <> <Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "speedy" && show && ram === "above 64gb storage" && <> <Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "normal" && show && ram === "above 128gb storage" && <><Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "speedy" && show && ram === "above 128gb storage" && <><Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "gaming" && show && ram === "above 128gb storage" && <><Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "speedy" && show && ram === "above 256gb storage" && <>  <Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "gaming" && show && ram === "above 256gb storage" && <>  <Apple_4 /><Apple_5 /> <Apple_6/>  </>}
{selected === "Apple" && price === "above 40000" && genere === "normal" && show && ram === "above 256gb storage" && <>  <Apple_4 /><Apple_5 /> <Apple_6/>  </>}


{/* apple above 50000 */}

{selected === "Apple" && price === "above 50000" && genere === "gaming" && show && ram === "above 64gb storage" && <> <Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "normal" && show && ram === "above 64gb storage" && <> <Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "speedy" && show && ram === "above 64gb storage" && <> <Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "normal" && show && ram === "above 128gb storage" && <><Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "speedy" && show && ram === "above 128gb storage" && <><Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "gaming" && show && ram === "above 128gb storage" && <><Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "speedy" && show && ram === "above 256gb storage" && <>  <Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "gaming" && show && ram === "above 256gb storage" && <>  <Apple_7 /><Apple_8/> <Apple_9/>  </>}
{selected === "Apple" && price === "above 50000" && genere === "normal" && show && ram === "above 256gb storage" && <>  <Apple_7 /><Apple_8/> <Apple_9/>  </>}


{/* samsung above 10000 */}

{selected === "samsung" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "both"   && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "both"   && show && ram === "6gb above 128gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "both"   && show && ram === "6gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "speedy" && show && ram === "8gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "gaming" && show && ram === "8gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "normal" && show && ram === "8gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}
{selected === "samsung" && price === "above 10000" && genere === "both"   && show && ram === "8gb above 256gb storage" && <>           <Samsung_1 /><Samsung_2 /> <Samsung_3/>  </>}


{/* samsung above 20000 */}

{selected === "samsung" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "both"   && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "both"   && show && ram === "6gb above 128gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "both"   && show && ram === "6gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "speedy" && show && ram === "8gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "gaming" && show && ram === "8gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "normal" && show && ram === "8gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}
{selected === "samsung" && price === "above 20000" && genere === "both"   && show && ram === "8gb above 256gb storage" && <>           <Samsung_4 /><Samsung_5 /> <Samsung_6/>  </>}

{/*  samsung above 30000 */}

{selected === "samsung" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "both"   && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "both"   && show && ram === "6gb above 128gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "both"   && show && ram === "6gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "speedy" && show && ram === "8gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "gaming" && show && ram === "8gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "normal" && show && ram === "8gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}
{selected === "samsung" && price === "above 30000" && genere === "both"   && show && ram === "8gb above 256gb storage" && <>           <Samsung_7 /><Samsung_8 /> <Samsung_9/>  </>}

{/* samsung above 40000 */}

{selected === "samsung" && price === "above 40000" && genere === "normal" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "speedy" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "both"   && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "gaming" && show && ram === "6gb above 64gb storage/memorycard" && <> <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "both"   && show && ram === "6gb above 128gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "speedy" && show && ram === "6gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "gaming" && show && ram === "6gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "normal" && show && ram === "6gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "both"   && show && ram === "6gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "speedy" && show && ram === "8gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "gaming" && show && ram === "8gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "normal" && show && ram === "8gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}
{selected === "samsung" && price === "above 40000" && genere === "both"   && show && ram === "8gb above 256gb storage" && <>           <Samsung_10 /><Samsung_11 /> <Samsung_12/>  </>}


{/* realme above 10000 */}
{selected === "realme" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <>           <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <>           <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <>           <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "speedy" && show && ram === "8gb above 128gb storage" && <>           <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "gaming" && show && ram === "8gb above 128gb storage" && <>           <Realme_1 /><Realme_2 /> <Realme_3/>  </>}
{selected === "realme" && price === "above 10000" && genere === "normal" && show && ram === "8gb above 128gb storage" && <>           <Realme_1 /><Realme_2 /> <Realme_3/>  </>}

{/* realme above 20000 */}
{selected === "realme" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <>           <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <>           <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <>           <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "speedy" && show && ram === "8gb above 128gb storage" && <>           <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "gaming" && show && ram === "8gb above 128gb storage" && <>           <Realme_4 /><Realme_5 /> <Realme_6/>  </>}
{selected === "realme" && price === "above 20000" && genere === "normal" && show && ram === "8gb above 128gb storage" && <>           <Realme_4 /><Realme_5 /> <Realme_6/>  </>}

{/* realme above 30000 */}
{selected === "realme" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 64gb storage/memorycard" && <> <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 128gb storage" && <>           <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 128gb storage" && <>           <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 128gb storage" && <>           <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "speedy" && show && ram === "8gb above 128gb storage" && <>           <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "gaming" && show && ram === "8gb above 128gb storage" && <>           <Realme_7 /><Realme_8 /> <Realme_9/>  </>}
{selected === "realme" && price === "above 30000" && genere === "normal" && show && ram === "8gb above 128gb storage" && <>           <Realme_7 /><Realme_8 /> <Realme_9/>  </>}

{/* xiaomi above 10000 */}
{selected === "xiaomi" && price === "above 10000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}
{selected === "xiaomi" && price === "above 10000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_1 /><Xiaomi_2 /> <Xiaomi_3/>  </>}

{/* xiaomi above 20000 */}
{selected === "xiaomi" && price === "above 20000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}
{selected === "xiaomi" && price === "above 20000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_4 /><Xiaomi_5 /> <Xiaomi_6/>  </>}

{/* xiaomi above 30000 */}
{selected === "xiaomi" && price === "above 30000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}
{selected === "xiaomi" && price === "above 30000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Xiaomi_7 /><Xiaomi_8 /> <Xiaomi_9/>  </>}

{/* oppo above 10000 */}
{selected === "oppo" && price === "above 10000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}
{selected === "oppo" && price === "above 10000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Oppo_1 /><Oppo_2 /> <Oppo_3/>  </>}

{/* oppo above 20000 */}
{selected === "oppo" && price === "above 20000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}
{selected === "oppo" && price === "above 20000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Oppo_4 /><Oppo_5 /> <Oppo_6/>  </>}

{/* oppo above 30000 */}

{selected === "oppo" && price === "above 30000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <><Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <><Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <><Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <><Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <><Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}
{selected === "oppo" && price === "above 30000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <><Oppo_7 /><Oppo_8 /> <Oppo_9/>  </>}

{/* vivo above 10000 */}

{selected === "vivo" && price === "above 10000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}
{selected === "vivo" && price === "above 10000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_1 /><Vivo_2 /> <Vivo_3/>  </>}

{/* vivo above 20000 */}
{selected === "vivo" && price === "above 20000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}
{selected === "vivo" && price === "above 20000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_4 /><Vivo_5 /> <Vivo_6/>  </>}

{/* vivo above 30000 */}

{selected === "vivo" && price === "above 30000" && genere === "gaming" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "normal" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "speedy" && show && ram === "4gb above 64gb storage/memorycard" && <> <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "normal" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "speedy" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "gaming" && show && ram === "6gb above 128gb storage/memorycard" && <>           <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "gaming" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "normal" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}
{selected === "vivo" && price === "above 30000" && genere === "speedy" && show && ram === "8gb above 256gb storage/memorycard" && <>           <Vivo_7 /><Vivo_8 /> <Vivo_9/>  </>}



















{/* ending part  */}
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
        


export default Phones ;