import './SmallMeter.css'
import React from "react";
import {useLocation} from "react-router-dom";

function SmallMeter({ handleSmallMetr, toggleSmallMeter, findSmallFilms }) {
  const isChecked = localStorage.getItem('smallMeter') === 'false' || localStorage.getItem('smallMeter') === null ? false : true
  // console.log('allFilmsFromApi')

  const allFilmsFromApi = localStorage.getItem('findList') !== null && JSON.parse(localStorage.getItem('findList'))?.length !== 0

  function actionSmallMetr(e) {
    localStorage.setItem('smallMeter', handleSmallMetr().toString())
    if (allFilmsFromApi){
      findSmallFilms(e, isChecked)
      // let list = JSON.parse(localStorage.getItem('findList'))
      //   .filter(el => el.nameRU.toLowerCase().includes(localStorage.getItem('valInput')))
      //   .filter(el => el.duration < 40)
      // console.log('list')
      // console.log(list)
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
