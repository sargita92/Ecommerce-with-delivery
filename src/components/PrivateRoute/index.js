import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";


  function PrivateRoute({ user, ...attributes }){

    if (!user || user.token === ''){ 
        return <Redirect to="/" />;
    }

    return <Route {...attributes} />
    
  }
  
  export default PrivateRoute ;