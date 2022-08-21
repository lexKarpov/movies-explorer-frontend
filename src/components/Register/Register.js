import React, { useState, useEffect } from 'react'
import './Register.css'
import FormSign from '../FormSign/FormSign'
import Header from '../Header/Header'

function Register({ isLogged, pageLogin }) {
  return (
    <div className='register'>
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main>
        <FormSign />
      </main>
    </div>
  )
}

export default Register