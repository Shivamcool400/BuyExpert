import React, {useState} from 'react';
import Fire from '../../firebase';
import './contactus.css'

function Contactus () {

   const [name,setName] = useState('');
   const [email,setEmail]=useState("");
   const [message,setMessage]=useState('');
   const [responseToPost,setResponseToPost]=useState("");

   const db = Fire.firestore();


   const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contactus').add({
            name: name,
            email: email,
            message: message
        }).then(()=>{
            setResponseToPost('Your message has been sent successfully.');
        }).catch((error)=> {
            alert(error.message);
        });
        
        setName("");
        setMessage("");
        setEmail("");
        
      };

    
        return(
        
        <div className="body">
            <hr className="shadow-lg bg-body rounded" />
            {/* <h1 className="head"> Contact Us</h1> */}
            <div className="box box2">
                <div className="left">
                    <form method="POST" action="/contactus" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Get in touch</legend>
                            <p className="text-success text-center">{responseToPost}</p>
                            <div class="form-group input">
                                <input type="text" class="form-control" name="name" placeholder="Enter name" value={name } onChange={e => setName(e.target.value)} />
                            </div>
                            <div class="form-group input">
                                <input type="email" class="form-control" name="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group input">
                                <textarea class="form-control" rows="5" id="message" placeholder="Enter your message here..." name="message" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
                            </div>
                            
                            <button className="btn btnmessage">Submit</button>
                            
                        </fieldset>
                    </form>
                </div>

                

                {/* <div className="right">
                    <div className="emailicon shadow p-3 mb-5 bg-white rounded">
                        <em>For more queries, mail at</em>
                        <i className="fa fa-envelope-o fa-3x"></i>
                        <a href="https://www.gmail.com mailto: shivam.ece.pu@gmail.com" className="email">shivam.ece.pu@gmail.com</a>
                    </div>
                </div> */}
            </div>
            
        </div>
        
        
        
        ); } 
        


export default Contactus ;