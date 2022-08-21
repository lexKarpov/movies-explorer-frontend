import './LabelSearch.css'
import searchLogo from '../../images/movie/searchIcon.png'

function LabelSearch() {
  return (
    <label className="formSearch__label-input">
      <img alt="иконка поиска" className="formSearch__image" src={searchLogo} />
      <input className="formSearch__input" type="text" placeholder="Фильм"/>
      <button className="formSearch__submit" type="submit"/>
    </label>
  )
}

export default LabelSearch