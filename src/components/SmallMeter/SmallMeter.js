import './SmallMeter.css'
import React from "react";

function SmallMeter({ handleSmallMetr, toggleSmallMeter }) {
  function actionSmallMetr() {
    handleSmallMetr()
  }

  return (
    <div className='formSearch__toggle'>
      <button className={`formSearch__check ${toggleSmallMeter ? 'checked' : ''}`} type="button" onClick={actionSmallMetr}/>

      <p className="formSearch__description-check">Короткометражки</p>
    </div>
  )
}

export default SmallMeter
