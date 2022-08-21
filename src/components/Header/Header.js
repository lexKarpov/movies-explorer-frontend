import './Header.css'
import { Link, useLocation } from "react-router-dom";
import HeadNavLog from "../HeadNavLog/HeadNavLog";
import HeadNavNoLog from "../HeadNavNoLog/HeadNavNoLog";
import Burger from "../Burger/Burger";
import useWindowDimensions from "../../utils/changeWindowDimentions";

function Header({ isLog, pageLogin }) {
  // useWindowDimensions()
  const windowWidth = useWindowDimensions().width
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
        {isLog && windowWidth > 768 ? <HeadNavLog /> : null}
        {!isLog ? <HeadNavNoLog /> : null}
        {isLog && windowWidth > 768 ? <Link className="link header__account" to='/editProfile'>Аккаунт</Link> : null}
        {isLog && windowWidth <= 768 ? <Burger /> : null}
      </wrapper>
    </header>
  );
}

export default Header;