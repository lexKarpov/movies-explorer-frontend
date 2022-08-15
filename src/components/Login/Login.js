import React, { useState, useEffect } from 'react'

function Login({ pageLogin, loginProfile }) {
  const [inputsValue, setInputValue] = useState({ email: '', password: '' })

  useEffect(() => pageLogin())

  function handleChangeInputs(evt) {
    const { name, value } = evt.target
    setInputValue(prevState => ({ ...prevState, [name]: value }))
  }

  return (
    <div className='register'>

    </div>
  )
}

export default Login