import React, { useEffect, useState } from 'react';
import Fire from "./firebase";
import './Auth.css'


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
 const [currentuser, setCurrentUser] = useState(null);
 const [pending,setPending] = useState(true);

useEffect(() => {
    Fire.auth().onAuthStateChanged((user)=> {
        setCurrentUser(user)
        setPending(false)
    });
},[]);

if(pending) {
    return <> <i class="fas fa-spinner loading-icon"></i> </>
}
    return (
        <AuthContext.Provider 
        value={{
            currentuser
        }}
        >

            {children}
        </AuthContext.Provider>
    ); 

};