import React, { useContext } from 'react'
import { Route, Redirect} from 'react-router-dom';
import { AuthContext } from './Auth';

function Protected({ component: Component , ...rest}) {
    const {currentuser} = useContext(AuthContext);
    return (
        <div>
        <Route {...rest} render={props=> {
         if(currentuser) {
             return <Component {...props} />
         } else {
             return <Redirect to ='/login' />
         }
        }} />
    </div>
    )

}

export default Protected
