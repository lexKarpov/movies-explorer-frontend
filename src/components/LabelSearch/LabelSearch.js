import './LabelSearch.css'
import searchLogo from '../../images/movie/searchIcon.png'

function LabelSearch({writeValue, val}) {
  return (
    <label className="formSearch__label-input">
      <img alt="иконка поиска" className="formSearch__image" src={searchLogo} />
      <input className="formSearch__input" type="text" value={val} placeholder="Фильм" onChange={writeValue}/>
      <button className="formSearch__submit" type="submit"/>
    </label>
  )
}

export default LabelSearch
