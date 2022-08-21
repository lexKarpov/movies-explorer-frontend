import React, { useState, useEffect } from 'react';
import FormSign from '../FormSign/FormSign';
import Header from '../Header/Header'
function Login({ pageLogin, isLogged }) {
  const [inputsValue, setInputValue] = useState({ email: '', password: '' });

  function handleChangeInputs(evt) {
    const { name, value } = evt.target;
    setInputValue(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className='register'>
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main>
        <FormSign />
      </main>
    </div>
  )
}

export default Login