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

  function findSmallFilms(e){
    // console.log(location.pathname)
    // findFilms(e, val)
    if (location.pathname === '/films'){
      // console.log('It`s film inputseearch')

    }else{
      // console.log('It`s savefilm inputseearch')
    }
  }

  return (
    <div className="form-search__wrapper">
      <form className="formSearch" onSubmit={(e) => findFilms(e, val)}>
        <LabelSearch writeValue={writeValue} val={val}/>
        {windowWidth && <SmallMeter
          handleSmallMetr={handleSmallMetr}
          toggleSmallMeter={toggleSmallMeter}
          findSmallFilms={findSmallFilms}
        />}
      </form>
      {!windowWidth && <SmallMeter
        handleSmallMetr={handleSmallMetr}
        toggleSmallMeter={toggleSmallMeter}
        findSmallFilms={findSmallFilms}
      />}
    </div>

  )
}
export default FormSearch
