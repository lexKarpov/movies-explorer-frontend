import React, { useState, useEffect } from 'react'
import './Register.css'
import FormSign from '../FormSign/FormSign'
import Header from '../Header/Header'

function Register({ isLogged, pageLogin, submitRegisterForm }) {

  return (
    <div className='register'>
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main>
        <FormSign submitRegisterForm={submitRegisterForm} />
      </main>
    </div>
  )
}

export default Register
