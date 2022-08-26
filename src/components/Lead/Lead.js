
import worldTexts from "../../images/lead/worldTexts.png";
import { Link } from 'react-router-dom';
import './Lead.css'

function Lead() {
  return (
    <section className="lead">
      <div className="lead__wrapper">
        <div className="lead__info">
          <h1 className="lead__title">Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
          <p className="lead__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a className="link lead__link" href="#abouts">Узнать больше</a>
        </div>
        <img alt="мир из веба" className="lead__image" src={worldTexts} />
      </div>
    </section>
  )
}

export default Lead
