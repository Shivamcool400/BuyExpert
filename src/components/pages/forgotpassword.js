import React, {useState} from 'react'
import Fire from '../../firebase';
import { Link, useHistory } from 'react-router-dom';
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
        <div>
            <br></br>
            <br></br>
             <div className="container">
  <div className="row">
    <div className="col" />
    <div className="col-sm-12 col-md-8">
      <div className="card">
        <div className="card-body">
         <div className="form-floating mb-3">
            <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
            <p className="errorMsg">{emailError}</p>
          </div>
          <button type="button" onClick={handleLogin} className="btn sign-in-btn btn-lg">Submit</button>
        </div>
        </div>
      </div>
               
    <div className="col" />
  </div>
</div>
<br></br>
<br></br>
</div>

    )
}

export default Forgotpassword;
