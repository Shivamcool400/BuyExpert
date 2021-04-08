import React, {useState, useEffect, Component} from 'react';
import './phone.css';
import Fire from '../../firebase';
import Product from './phonecomponents/product';
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


  const [price,setPrice] = useState('');
  const [genere,setGenere] = useState('');
  const [ram,setRam] = useState('');
 
  const content = () => {
    setShow(true);
  }
const reset = () => {
  window.location.reload(false);
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
          /// find one!///
            <div>


        <div className="container" className="back">
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














{/* ending part  */}
<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark"># Brands We Operate</h2>
      </blockquote>
    </figure>
        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/oppo.jpg" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />

          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/samsung.png" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/oneplus.jpg" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/mi.jpg" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/apple.png" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/micromax.png" className="rounded mx-auto d-block w-50 h-70 image" alt="..." />
          </div>
        </div>

        <br></br>
        <br></br>

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