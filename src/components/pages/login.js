import React, { useState, useEffect} from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';
import Fire from '../../firebase';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const Login = () => { 
 

  const history = useHistory() ;
const [user, setUser] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [hasAccount, setHasAccount] = useState(true);

var uiConfig = {
  
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/home',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

const clearInputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () => {
  setEmailError('');
  setPasswordError('');
}

const togglesign = () => {
  setHasAccount(!hasAccount);
  clearInputs();
  clearErrors();
}


const handleLogin = () => {
  clearErrors();
  
  
  Fire.auth().signInWithEmailAndPassword(email, password)
  .then((auth) => {
    if (auth.user.emailVerified) {
      history.push('/home')
      window.scrollTo(0,0);
    } else {
      Fire.auth().signOut();
      alert("please verify email to continue signin!")
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
      Fire.auth().signOut();
      var user = Fire.auth().currentUser;
      
      user.sendEmailVerification().then(function() {
        alert("successfuly registered!");
      }).catch(function(error) {
        // An error happened.
      });
      
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
<div id="logreg-forms">
  <form className="form-signin">
    <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}>{hasAccount ? (<> Sign in</>) : (<> Sign Up</>)}</h1>
    <br />
    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus value={email} onChange={(e) => setEmail(e.target.value)} />
    <p className="errorMsg">{emailError}</p>
    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    <p className="errorMsg">{passwordError}</p>
    
    
    { hasAccount ? (<>
      <button className="btn btn-success btn-block" type="button" onClick={handleLogin}><i className="fas fa-sign-in-alt" /> Sign in</button>
    
    <hr />
      <p>Don't have an account?</p> 
    <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={togglesign}><i className="fas fa-user-plus" /> Sign up</button>
    </>) : (<>
      <button className="btn btn-primary btn-block" type="button" onClick={handleSignup}><i className="fas fa-user-plus" /> Sign Up</button>
    <a href="#" id="cancel_signup" onClick={togglesign}><i className="fas fa-angle-left" /> Back</a>
    </>) }

    { hasAccount ? (<>
      <a href="/forgot" id="forgot_pswd">Forgot password?</a>
    </>) : (<></>) }
    <br/>

    <p style={{textAlign: 'center'}}> OR</p>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Fire.auth()}/>
    
  </form>
  
    
    
<br />
</div>

</>
     ); 
      };
        


export default Login ;

