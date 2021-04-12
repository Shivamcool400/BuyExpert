import React, { useState, useEffect} from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import Fire from '../../firebase';
import { useStateValue } from '../../stateprovider';


const Login = () => { 
 

  const history = useHistory() ;
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [hasAccount, setHasAccount] = useState(false);


const clearInputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}


const handleLogin = () => {
  clearErrors();
  Fire.auth().signInWithEmailAndPassword(email, password)
  .then((auth) => {
    if (auth) {
      history.push('/home')
      window.scrollTo(0,0);
    }
  })
  .catch((err) => {
    switch (err.code) {
      case "auth/invalid-email":
        case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
    }
  });
};

const handleSignup = () => {
  clearErrors();
  Fire.auth().createUserWithEmailAndPassword(email, password)
  .then((auth) => {
    if (auth) {
      history.push('/home')
      window.scrollTo(0,0);
      clearInputs();
    }
  })
  .catch((err) => {
    switch (err.code) {
      case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
            break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
    }
  });
};





    return (
      <>
      <br></br>
      <br></br>
      <br></br>
        <div className="container">
  <div className="row">
    <div className="col" />
    <div className="col-sm-12 col-md-8">
      <div className="card">
        <div className="card-body">
          <img src="/logo.jpeg" className="img-fluid" />
          <br></br>
          <div className="form-floating mb-3">
            <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
            <p className="errorMsg">{emailError}</p>
          </div>
          <div className="form-floating">
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            <p className="errorMSg">{passwordError}</p> 
          </div>
          <div>
            { hasAccount ? (
              <>
            <button type="button" onClick={handleLogin} className="btn sign-in-btn btn-lg">Sign in</button>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember Me <div><a href="/forgot"> Forgot Password</a></div>
            </label>
          </div>
          <a className="new-account" onClick={() => setHasAccount(!hasAccount)} href="#"> Create new account</a>  
              </>
            ) : (
            <>
            <button type="button" onClick={handleSignup} className="btn sign-in-btn btn-lg">Sign Up</button>
          
            <a className="new-account" onClick={() => setHasAccount(!hasAccount)} href="#"> Already have an account </a>
             </>

            )


            }
          </div>
          
          
        </div>
      </div>
    </div>           
    <div className="col" />
  </div>
</div>
</>
     ); 
      };
        


export default Login ;

