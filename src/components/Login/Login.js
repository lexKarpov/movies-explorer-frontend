import React, { useState, useEffect } from 'react';
import FormSign from '../FormSign/FormSign';

function Login({ pageLogin, loginProfile }) {
  const [inputsValue, setInputValue] = useState({ email: '', password: '' });

  function handleChangeInputs(evt) {
    const { name, value } = evt.target;
    setInputValue(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className='register'>
      <FormSign />
    </div>
  )
}

export default Login