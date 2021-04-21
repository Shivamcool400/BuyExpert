import React, {useState} from 'react'
import Fire from '../../firebase';
import { Link } from 'react-router-dom';
function Forgotpassword() {

    const [email,setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const handleLogin = () => {
        
       
        Fire.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("password reset Email send successfully!. You can now move to login page.")
            
         })
        .catch((err) => {
          switch (err.code) {
            case "auth/invalid-email":
              case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError(err.message);
                  break;
                 }
        });
      };

    return (

      <>
<div id="logreg-forms">
  <form className="form-signin">
    <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>Forgot Password</h1>
    
    
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={email} onChange={(e) => setEmail(e.target.value)} />
    <p className="errorMsg" style={{color: 'red'}}>{emailError}</p>
  
      <button className="btn btn-success btn-block" type="button" onClick={handleLogin}>Send Email</button>  
    
  </form>
  
    
    
  <br />
</div>
</>















//         <div>
//             <br></br>
//             <br></br>
//              <div className="container">
//   <div className="row">
//     <div className="col" />
//     <div className="col-sm-12 col-md-8">
//       <div className="card">
//         <div className="card-body">
//          <div className="form-floating mb-3">
//             <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
//             <label htmlFor="floatingInput">Email address</label>
//             <p className="errorMsg">{emailError}</p>
//           </div>
//           <Link to={'/login'}><button type="button" onClick={handleLogin} className="btn sign-in-btn btn-lg">Submit</button></Link>
          
//         </div>
//         </div>
//       </div>
               
//     <div className="col" />
//   </div>
// </div>
// <br></br>
// <br></br>
// </div>

    )
}

export default Forgotpassword;
