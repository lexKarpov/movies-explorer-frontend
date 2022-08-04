import './Header.css'
import logo from "../../images/header/logo.svg";
import {Link} from "react-router-dom";

function Header() {
  return (
      <header className="header">
        <wrapper className="header__wrapper">
        <img className="header__image" src={logo}/>
        <nav className='header__nav'>
          <Link className="link header__link" to='/signup'>Регистрация</Link>
          <Link className="link header__link header__link_active" to='/signin'>Войти</Link>
        </nav>
        </wrapper>
      </header>
  );
}

export default Header;