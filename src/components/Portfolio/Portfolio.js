import './Portfolio.css'
import me from "../../images/about/me.jpg";
import arrow from "../../images/about/arrow.png";

function Portfolio(){
  return (
    <section className="portfolio">
      <wrapper className="portfolio__wrapper">
          <h2 className="portfolio__title">Портфолио</h2>
        <ul className="list portfolio__list">
          <li className="portfolio__link">
            <a className="link portfolio__site" href="https://lexkarpov.github.io/russian-travel/">
            <h3 className="portfolio__name">Статичный сайт</h3>
            <img alt="стрелка-ссылка" className="portfolio__image" src={arrow}/>
          </a>
          </li>
          <li className="portfolio__link">
            <a className="link portfolio__site" href="https://lexkarpov.github.io/russian-travel/">
              <h3 className=" portfolio__name">Адаптивный сайт</h3>
              <img alt="стрелка-ссылка" className="portfolio__image" src={arrow}/>
            </a>
          </li>
          <li className="portfolio__link">
            <a className="link portfolio__site" href="https://lexkarpov.github.io/mesto/">
              <h3 className="portfolio__name" >Одностраничное приложение</h3>
              <img alt="стрелка-ссылка" className="portfolio__image" src={arrow}/>
            </a>
          </li>
        </ul>
      </wrapper>
    </section>
  )
}
export default Portfolio