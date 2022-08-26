import React, { useState } from 'react';
import './Burger.css'
import burgerOpen from '../../images/burger/burgerOpen.png'
import burgerClose from '../../images/burger/burgerClose.png'
import { Link } from 'react-router-dom';


function Burger() {
  const [isOpen, setIsOpen] = useState(false)


  function openBurger() {
    setIsOpen(true)
  }

  function closeBurger() {
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <div className='burger'>
        <button type="button" className='burger__button' onClick={openBurger}>
          <img alt="иконка бургер-меню" className='burger__img' src={burgerOpen} />
        </button>
      </div>
    )
  } else {
    return (
      <div className='burger__wrapper'>
        <button type="button" className='burger__button burger__button_close' onClick={closeBurger}>
          <img alt="иконка закрытия меню" className='burger__img burger__img_close' src={burgerClose} />
        </button>
        <div className='burger__links'>
          <div className='burger__nav'>
            <Link className='burger__link' to='/'>Главная</Link>
            <Link className='burger__link burger__link_active' to='/films'>Фильмы</Link>
            <Link className='burger__link' to='/saveFilms'>Сохраненные фильмы</Link>
          </div>
          <Link className="link burger__account" to='/editProfile'>Аккаунт</Link>
        </div >
      </div>

    )
  }
}

export default Burger
