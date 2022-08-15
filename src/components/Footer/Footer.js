import './Footer.css'

function Footer({ isLog, pageLogin }) {
  if (pageLogin) {
    return null
  }
  const date = new Date().getFullYear();
  const color = isLog ? "black" : '';
  return (
    <footer className={`footer ${color}`}>
      <wrapper className="footer__wrapper">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__info">
          <p className="footer__age">© {date}</p>
          <nav className="footer__nav">
            <a className="link footer__com" target="_blank" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
            <a className="link footer__com" target="_blank" href="https://github.com/lexKarpov">Github</a>
            <a className="link footer__com" target="_blank" href="https://vk.com/doyouknowlechkarpov">VK</a>
          </nav>
        </div>
      </wrapper>
    </footer>
  )
}

export default Footer