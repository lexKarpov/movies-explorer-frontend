import './SmallMeter.css'
import React from "react";

function SmallMeter({ handleSmallMetr, toggleSmallMeter }) {
  const isChecked = localStorage.getItem('smallMeter') === 'false' || localStorage.getItem('smallMeter') === false ? false : true
  console.log("isChecked")
  console.log(isChecked)
  localStorage.setItem('smallMeter', toggleSmallMeter.toString())

  function actionSmallMetr(e) {
    // handleSmallMetr()
    // localStorage.setItem('smallMeter', toggleSmallMeter.toString())

    localStorage.setItem('smallMeter', handleSmallMetr().toString())
    console.log('smallMeter')
    console.log(localStorage.getItem('smallMeter'))
  }

  return (
    <div className='formSearch__toggle'>
      <button className={`formSearch__check ${isChecked ? 'checked' : ''}`} type="button" onClick={actionSmallMetr}/>

      <p className="formSearch__description-check">Короткометражки</p>
    </div>
  )
}

export default SmallMeter
