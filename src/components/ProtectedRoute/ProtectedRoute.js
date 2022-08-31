import React from 'react'
import { Route, useNavigate, Navigate} from "react-router-dom"


const ProtectedRoute = ({ isLogged, children }) => {
  const jwt = localStorage.getItem('jwt')
  if(jwt){
    return children;
  }else{
    return <Navigate to="/" />;
  }


  // if (!isLogged) {
  //   return <Navigate to="/" />;
  // }
  // return children;
};

export default ProtectedRoute
