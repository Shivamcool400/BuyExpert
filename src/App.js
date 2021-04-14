import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Aboutus from './components/pages/aboutus';
import Login from './components/pages/login';
import Footer from './components/footer';
import Contactus from './components/pages/contactus';
import Phones from './components/pages/phone';
import Laptops from './components/pages/laptop';
import GamingConsoles from './components/pages/gamingconsole';
import Accessories from './components/pages/accessories';
import Fire from './firebase';
import { useStateValue } from "./stateprovider";
import Forgotpassword from './components/pages/forgotpassword';
import Loginalert from './components/pages/loginalert';


function App() {
  const [{ user }, dispatch] = useStateValue();
  const authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user
        })
        
      } else {
         dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    };
    
    useEffect(() => {
      authListener();
    }, []);
  return (
    <div className="App">
      <div className="background">
          <Router>
          <Navbar/>
              <Switch>
              <Route path='/' exact component={Home} />
                  <Route path='/aboutus'  component={Aboutus} />
                  <Route path='/contactus'  component={Contactus} />
                  <Route path='/home'  component={Home} />
                  <Route path='/login'  component={Login} />
                  {user ? <Route path='/phones'  component={Phones} /> : <Route path='/phones'  component={Loginalert} />}
                  {user ? <Route path='/laptops' component={Laptops} /> : <Route path='/laptops'  component={Loginalert} />}
                  {user ? <Route path='/gamingconsoles' component={GamingConsoles} /> : <Route path='/gamingconsoles'  component={Loginalert} />}
                  {user ? <Route path='/accessories' component={Accessories} /> : <Route path='/accessories'  component={Loginalert} />}
                  
               <Route path='/forgot' component={Forgotpassword}/>
                  
              
              </Switch>
      
               <Footer/>
          
          
          
          
          </Router>
      </div>
      </div>
      
    
      
  );
}

export default App;
