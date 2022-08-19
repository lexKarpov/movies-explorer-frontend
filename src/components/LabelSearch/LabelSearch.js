import './LabelSearch.css'
import searchLogo from '../../images/movie/searchIcon.png'

function LabelSearch() {
  return (
    <label className="formSearch__label-input">
      <img className="formSearch__image" src={searchLogo} />
      <input className="formSearch__input" type="text" placeholder="Фильм"></input>
      <button className="formSearch__submit" type="submit"></button>
    </label>
  )
}

export default LabelSearch