import './FormSearch.css'

import React, { useEffect, useState } from 'react'
import LabelSearch from '../LabelSearch/LabelSearch'
import SmallMeter from '../SmallMeter/SmallMeter'
import useWindowDimensions from "../../utils/changeWindowDimentions";


function FormSearch({findFilms, handleSmallMetr, toggleSmallMeter}) {
  const windowWidth = useWindowDimensions().width >= 730
  const [checked, setChecked] = React.useState(false)
  const [val, setVal] = useState('')


  function writeValue(e) {
    setVal(e.target.value)
  }

  return (
    <div className="form-search__wrapper">
      <form className="formSearch" onSubmit={(e) => findFilms(e, val)}>
        <LabelSearch writeValue={writeValue}/>
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
