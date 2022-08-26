import './FormSearch.css'
import React, { useEffect, useState } from 'react'
import LabelSearch from '../LabelSearch/LabelSearch'
import SmallMeter from '../SmallMeter/SmallMeter'
import useWindowDimensions from "../../utils/changeWindowDimentions";
import {useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";


function FormSearch({findFilms, handleSmallMetr, toggleSmallMeter}) {
  const location = useLocation();
  let inputValue
  if (location.pathname === '/films'){
    inputValue = localStorage.getItem('valInput') ? localStorage.getItem('valInput') : ''
  }
  if (location.pathname ==='/saveFilms'){
    inputValue = localStorage.getItem('valInputSavedFilms') ? localStorage.getItem('valInputSavedFilms') : ''
  }

  const windowWidth = useWindowDimensions().width >= 730
  const [val, setVal] = useState(inputValue)

  function writeValue(e) {
    setVal(e.target.value)
  }

  return (
    <div className="form-search__wrapper">
      <form className="formSearch" onSubmit={(e) => findFilms(e, val)}>
        <LabelSearch writeValue={writeValue} val={val}/>
        {windowWidth && <SmallMeter
          handleSmallMetr={handleSmallMetr}
          toggleSmallMeter={toggleSmallMeter}
        />}
      </form>
      {!windowWidth && <SmallMeter
        handleSmallMetr={handleSmallMetr}
        toggleSmallMeter={toggleSmallMeter}
      />}
    </div>

  )
}
export default FormSearch
