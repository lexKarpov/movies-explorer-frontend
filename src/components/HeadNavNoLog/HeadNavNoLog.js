import './HeadNavNoLog'
import {Link} from "react-router-dom";

function HeadNavNoLog () {
return(
  <nav className='header__nav'>
    <Link className="link header__link" to='/signup'>Регистрация</Link>
    <Link className="link header__link header__link_active" to='/signin'>Войти</Link>
  </nav>
)
}

export default HeadNavNoLog