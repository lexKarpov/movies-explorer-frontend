import React, { useState, useEffect } from 'react';
import FormSign from '../FormSign/FormSign';
import Header from '../Header/Header'
import Preloader from "../Preloader/Preloader";

function Login({ pageLogin, isLogged, submitRegisterForm, preloader }) {

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
