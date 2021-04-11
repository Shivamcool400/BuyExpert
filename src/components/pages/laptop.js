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


  const [price,setPrice] = useState('');
  const [genere,setGenere] = useState('');
  const [ram,setRam] = useState('');


const content = () => {
    setShow(true);
  }
const reset = () => {
  setSelected("");
 setShow("");
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
  <label className="input-group-text" htmlFor="inputGroupSelect01">Ram/ Graphic card</label>
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

















































<figure className="text-center ">
      <blockquote className="blockquote ">
        <h2 className="msg-heading text-dark"># Brands We Operate</h2>
      </blockquote>
    </figure>
        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/dell.png" className="rounded mx-auto d-block w-40 h-50" alt="..." />

          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/samsung.png" className="rounded mx-auto d-block w-50 h-70" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/apple.png" className="rounded mx-auto d-block w-50 h-70" alt="..." />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4 image">
          <img src="/hp.png" className="rounded mx-auto d-block w-40 h-60" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/lenovo.png" className="rounded mx-auto d-block w-40 h-60" alt="..." />
          </div>
          <div className="col-sm-12 col-md-4 image">
          <img src="/acer.png" className="rounded mx-auto d-block w-40 h-60" alt="..." />
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