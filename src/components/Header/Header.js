import './Header.css'
import { Link, useLocation } from "react-router-dom";
import HeadNavLog from "../HeadNavLog/HeadNavLog";
import HeadNavNoLog from "../HeadNavNoLog/HeadNavNoLog";

function Header({ isLog, pageLogin }) {
  const location = useLocation();
  if (location.pathname === '/signin' || location.pathname === '/signup') {
    return null
  }
  const color = isLog ? "black" : '';
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