import './FormSearch.css'

import React, { useEffect, useState } from 'react'
import LabelSearch from '../LabelSearch/LabelSearch'
import SmallMeter from '../SmallMeter/SmallMeter'
import useWindowDimensions from "../../utils/changeWindowDimentions";


function FormSearch({findFilms, handleSmallMetr, toggleSmallMeter}) {
  const windowWidth = useWindowDimensions().width >= 730
  const inputValue = localStorage.getItem('valInput') ? localStorage.getItem('valInput') : ''

  const [checked, setChecked] = React.useState(false)
  const [val, setVal] = useState(inputValue)


  function writeValue(e) {
    setVal(e.target.value)
  }

  return (
    <div className="form-search__wrapper">
      <form className="formSearch" onSubmit={(e) => findFilms(e, val)}>
        <LabelSearch writeValue={writeValue} val = {val}/>
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
