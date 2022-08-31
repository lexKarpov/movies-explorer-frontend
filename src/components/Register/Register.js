import './Register.css'
import FormSign from '../FormSign/FormSign'
import Header from '../Header/Header'
import Preloader from "../Preloader/Preloader";
import { Navigate } from "react-router-dom";
import React from "react";

function Register({ isLogged, pageLogin, submitRegisterForm, preloader }) {
  const jwt = localStorage.getItem('jwt')
  if(jwt){
    return <Navigate to="/" />;
  }
  return (
    <div className='register'>
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main>
        {
          preloader ?
            <Preloader/>
            :
            <FormSign submitRegisterForm={submitRegisterForm}/>
        }
        </main>
    </div>
  )
}

export default Register
