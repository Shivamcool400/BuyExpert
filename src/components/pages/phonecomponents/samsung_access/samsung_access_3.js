import React, {useState, useEffect, Component} from 'react';
import Fire from '../../../../firebase';
import Product from '../product';


const Samsung_access_3 = () => {
    const db = Fire.firestore();

    useEffect(() => {
        
       db.collection('head_3_samsung_access').orderBy("choice").onSnapshot(snapshot => (
         setHead(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('specs_3_samsung_access').onSnapshot(snapshot => (
         setSpecs(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('youtube_3_samsung_access').onSnapshot(snapshot => (
         setYoutube(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('blog_3_samsung_access').onSnapshot(snapshot => (
         setBlog(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('seller_3_samsung_access').orderBy("name").onSnapshot(snapshot => (
         setSeller(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('gaming_3_samsung_access').onSnapshot(snapshot => (
         setGaming(snapshot.docs.map(doc => doc.data()))
       ))
       db.collection('tech_3_samsung_access').orderBy("serial").onSnapshot(snapshot => (
         setTech(snapshot.docs.map(doc => doc.data()))
       ))
       }, []);



    const [head,setHead] = useState([]);
    const [specs,setSpecs] = useState([]);
  
    const [youtube,setYoutube] = useState([]);
    const [blog,setBlog] = useState([]);
    const [seller,setSeller] = useState([]);
    
    const [gaming,setGaming] = useState([]);
    const [tech,setTech] = useState([]);

    return (
        <div>
            {head.map((head) => (
           <Product choice={head.choice} device={head.device} url={head.url} specs={specs} youtube={youtube} blog={blog} seller={seller} gaming={gaming} tech={tech}/>
          ))}
        </div>
    )
}

export default Samsung_access_3

