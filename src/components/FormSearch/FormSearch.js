import './FormSearch.css'
import searchLogo from '../../images/movie/searchIcon.png'
import React, { useEffect, useState } from 'react'
function FormSearch() {

  const [checked, setChecked] = React.useState(false)
  function handleSmallMetr() {
    setChecked(!checked)
  }

  return (
    <wrapper className="form-search-wrapper">
      <form className="formSearch">
        <label className="formSearch__label-input">
          <img className="formSearch__image" src={searchLogo}/>
          <input className="formSearch__input" type="text" placeholder="Фильм"></input>
          <button className="formSearch__submit" type="submit"></button>
        </label>
        <button className={`formSearch__check ${checked? 'checked' : ''}`} type="button" onClick={handleSmallMetr}>
        </button>
        <p className="formSearch__description-check">Короткометражки</p>
      </form>
    </wrapper>
  )
}
export default FormSearch