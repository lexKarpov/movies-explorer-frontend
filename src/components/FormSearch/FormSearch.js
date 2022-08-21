import './FormSearch.css'

import React, { useEffect, useState } from 'react'
import LabelSearch from '../LabelSearch/LabelSearch'
import SmallMeter from '../SmallMeter/SmallMeter'
import useWindowDimensions from "../../utils/changeWindowDimentions";


function FormSearch() {
  const windowWidth = useWindowDimensions().width >= 730
  const [checked, setChecked] = React.useState(false)

  function handleSmallMetr() {
    setChecked(!checked)
  }
  return (
    <div className="form-search__wrapper">
      <form className="formSearch">
        <LabelSearch />

        {windowWidth && <SmallMeter
          handleSmallMetr={handleSmallMetr}
          checked={checked}
        />}
      </form>
      {!windowWidth && <SmallMeter
        handleSmallMetr={handleSmallMetr}
        checked={checked}
      />}
    </div>

  )
}
export default FormSearch