import './SmallMeter.css'
import React from "react";
import {useLocation} from "react-router-dom";

function SmallMeter({ handleSmallMetr, toggleSmallMeter, findSmallFilms }) {
  const isChecked = localStorage.getItem('smallMeter') === 'false' || localStorage.getItem('smallMeter') === null ? false : true
  // console.log('allFilmsFromApi')

  const allFilmsFromApi = localStorage.getItem('allFilmsFromApi') !== null

  function actionSmallMetr(e) {
    localStorage.setItem('smallMeter', handleSmallMetr().toString())
    if (allFilmsFromApi){
      findSmallFilms(e)
    }

  }

  return (
    <div className='formSearch__toggle'>
       <button className={`formSearch__check ${isChecked ? 'checked' : ''}`} type='button' onClick={actionSmallMetr}/>
      <p className="formSearch__description-check">Короткометражки</p>
    </div>
  )
}

export default SmallMeter
