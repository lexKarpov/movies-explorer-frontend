import React, { useState, useEffect } from 'react';
import FormSign from '../FormSign/FormSign';
import Header from '../Header/Header'
import Preloader from "../Preloader/Preloader";
import {Navigate} from "react-router-dom";

function Login({ pageLogin, isLogged, submitRegisterForm, preloader }) {
  const jwt = localStorage.getItem('jwt')
  if(jwt){
    return <Navigate to="/" />;
  }
  return (
    <div className='register'>
      {
        preloader ?
          <Preloader/>
          :
          <>
            <Header isLog={isLogged} pageLogin={pageLogin} />
            <main>
              <FormSign submitRegisterForm={submitRegisterForm}/>
            </main>
          </>
      }
    </div>
  )
}

export default Login
