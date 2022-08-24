import './LabelSearch.css'
import searchLogo from '../../images/movie/searchIcon.png'
import {useState} from "react";

function LabelSearch({writeValue}) {
  return (
    <label className="formSearch__label-input">
      <img alt="иконка поиска" className="formSearch__image" src={searchLogo} />
      <input className="formSearch__input" type="text" placeholder="Фильм" onChange={writeValue}/>
      <button className="formSearch__submit" type="submit"/>
    </label>
  )
}

export default LabelSearch
