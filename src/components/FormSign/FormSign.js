import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FormSign.css';

function Form({ noFooter }) {
  const location = useLocation();
  let buttonSubmit
  let redirect
  let redirectTo
  let desc
  if (location.pathname === '/signin') {
    desc = 'Ещё не зарегистрированы?'
    buttonSubmit = 'Войти'
    redirect = 'Регистрация'
    redirectTo = '/signup'
  }
  if (location.pathname === '/signup') {
    desc = 'Уже зарегистрированы?'
    buttonSubmit = 'Зарегистрироваться'
    redirect = 'Войти'
    redirectTo = '/signin'
  }

  return (
    <form className='form'>
      <div className='form__wrapper'>
        {location.pathname === '/signup' &&
          <div className='label'>
            <label className='label__title'>Имя
              <input className='label__input' id="name-input" type='text'></input>
            </label>
            <span className='label__error' />
          </div>
        }
        <div className='label'>
          <label className='label__title'>E-mail
            <input className='label__input' id="name-input" type='email'></input>
          </label>
          <span className='label__error'></span>
        </div>

        <div className='label'>
          <label className='label__title'>Пароль
            <input className='label__input' id="name-input" type='password'></input>
          </label>
          <span className='label__error'>Что-то пошло не так...</span>
        </div>
        <button className='form__button'>{buttonSubmit}</button>
        <div className='redirect'>
          <p className='redirect__desc'>{desc}</p>
          <Link className='redirect__to' to={redirectTo}>{redirect}</Link>
        </div>

      </div>
    </form >
  )
}
export default Form;