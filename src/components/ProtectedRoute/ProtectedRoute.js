import React from 'react'
import {Navigate} from "react-router-dom"


const ProtectedRoute = ({ isLogged, children }) => {
  const jwt = localStorage.getItem('jwt')
  if(jwt){
    return children;
  }else{
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute
