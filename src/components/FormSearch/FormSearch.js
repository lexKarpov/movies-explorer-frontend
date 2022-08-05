import './FormSearch.css'
import searchLogo from '../../images/movie/searchIcon.png'
import find from '../../images/movie/find.png'

function FormSearch() {
  return (
    <wrapper className="form-search-wrapper">
      <form className="formSearch">
        <label className="formSearch__label-input">
          <img src={searchLogo}/>
          <input className="formSearch__input" type="text" placeholder="Фильм"></input>
          <button className="formSearch__submit" type="submit"></button>
        </label>
        <label className="formSearch__label-radio"></label>
      </form>
    </wrapper>
  )
}
export default FormSearch