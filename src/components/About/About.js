import './About.css'

function About() {
  return(
    <section className="about" id="abouts">
      <div className="about__wrapper">
        <h2 className="title">О проекте</h2>
        <div className="about__description">
          <div className="stage">
            <h3 className="stage__title">Дипломный проект включал 5 этапов</h3>
            <p className="stage__description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="stage">
            <h3 className="stage__title">На выполнение диплома ушло 5 недель</h3>
            <p className="stage__description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="progress">
          <div className="progress__week progress__week_color_green">1 неделя</div>
          <div className="progress__week">4 недели</div>
          <div className="progress__tech">Back-end</div>
          <div className="progress__tech">Front-end</div>
        </div>
      </div>
    </section>
  )
}

export default About
