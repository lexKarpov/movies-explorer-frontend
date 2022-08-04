
import worldTexts from "../../images/lead/worldTexts.png";
import {Link} from 'react-router-dom';
import './Lead.css'

function Lead() {
  return(
    <section className="lead">
      <wrapper className="lead__wrapper">
      <div className="lead__info">
        <h1 className="lead__title">Учебный проект студента факультета <nobr>Веб-разработки</nobr>.</h1>
        <p className="lead__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link className="link lead__link" to="/">Узнать больше</Link>
      </div>
      <img className="lead__image" src={worldTexts}></img>
      </wrapper>
    </section>
  )
}

export default Lead