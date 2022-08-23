import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FormSign.css';

function Form({ submitRegisterForm }) {
  const location = useLocation();
  let buttonSubmit
  let redirect
  let redirectTo
  let desc
  let nameForm

  if (location.pathname === '/signin') {
    desc = 'Ещё не зарегистрированы?'
    buttonSubmit = 'Войти'
    redirect = 'Регистрация'
    redirectTo = '/signup'
    nameForm = 'sign'
  }
  if (location.pathname === '/signup') {
    desc = 'Уже зарегистрированы?'
    buttonSubmit = 'Зарегистрироваться'
    redirect = 'Войти'
    redirectTo = '/signin'
    nameForm = 'signup'
  }

  const [inputsValue, setInputValue] = useState(
    {
      email: '',
      password: '',
      name: ''
    });

  function handleChangeInputs(evt) {
    const { name, value } = evt.target;
    setInputValue(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form className='form' name="register-form" onSubmit={(e) => submitRegisterForm(e, inputsValue, nameForm)}>
      <div className='form__wrapper'>
        {location.pathname === '/signup' &&
          <div className='label'>
            <label className='label__title'>Имя
              <input className='label__input' onChange={handleChangeInputs} id="name-input" name="name" type='text' required={true}/>
            </label>
            <span className='label__error' />
          </div>
        }
        <div className='label'>
          <label className='label__title'>E-mail
            <input className='label__input' onChange={handleChangeInputs} id="name-input" name="email" type='email' required={true}/>
          </label>
          <span className='label__error'></span>
        </div>

        <div className='label'>
          <label className='label__title'>Пароль
            <input className='label__input' onChange={handleChangeInputs} id="name-input" name="password" type='password' required={true}></input>
          </label>
          <span className='label__error'></span>
        </div>
        <button className='form__button' type="submit">{buttonSubmit}</button>
        <div className='redirect'>
          <p className='redirect__desc'>{desc}</p>
          <Link className='redirect__to' to={redirectTo}>{redirect}</Link>
        </div>

      </div>
    </form >
  )
}
export default Form;
