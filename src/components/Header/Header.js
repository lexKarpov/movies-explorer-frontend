import './Header.css'
import { Link, useLocation } from "react-router-dom";
import HeadNavLog from "../HeadNavLog/HeadNavLog";
import HeadNavNoLog from "../HeadNavNoLog/HeadNavNoLog";

function Header({ isLog, pageLogin }) {
  const color = isLog ? "black" : '';
  const location = useLocation();
  if (location.pathname === '/signin') {
    return (
      <header className="header black">
        <wrapper className="header__wrapper header__wrapper_type_sign">
          <Link className="header__image" to="/" />
          <h1 className="header__title">Рады видеть!</h1>
        </wrapper>
      </header>
    );
  } else if (location.pathname === '/signup') {
    return (
      <header className="header black">
        <wrapper className="header__wrapper header__wrapper_type_sign">
          <Link className="header__image" to="/" />
          <h1 className="header__title">Добро пожаловать!</h1>
        </wrapper>
      </header>
    );
  }

  return (
    <header className={`header ${color}`}>
      <wrapper className="header__wrapper">
        <Link className="header__image" to="/" />
        {isLog ? <HeadNavLog /> : <HeadNavNoLog />}
        {isLog ? <Link className="link header__account" to='/editProfile'>Аккаунт</Link> : null}
      </wrapper>
    </header>
  );
}

export default Header;