import './SmallMeter.css'
import React from "react";

function SmallMeter({ handleSmallMetr, findSmallFilms }) {
  const isChecked = localStorage.getItem('smallMeter') === 'false' || localStorage.getItem('smallMeter') === null ? false : true
  // console.log('allFilmsFromApi')

  const allFilmsFromApi = localStorage.getItem('findList') !== null && JSON.parse(localStorage.getItem('findList'))?.length !== 0

  function actionSmallMetr(e) {
    localStorage.setItem('smallMeter', handleSmallMetr().toString())
    if (allFilmsFromApi){
      findSmallFilms(e, isChecked)
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
