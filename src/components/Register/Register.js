import React, { useState, useEffect } from 'react'
import './Register.css'
import FormSign from '../FormSign/FormSign'
import Header from '../Header/Header'
import Preloader from "../Preloader/Preloader";

function Register({ isLogged, pageLogin, submitRegisterForm, preloader }) {

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
