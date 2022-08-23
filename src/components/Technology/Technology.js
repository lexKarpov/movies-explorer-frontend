import './Technology.css'

function Technology() {
  return (
    <section className="technology">
      <wrapper className="technology__wrapper">
        <h2 className="title">Технологии</h2>
        <div className="technology__description">
            <h3 className="technology__title">7 технологий</h3>
            <p className="technology__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="stack">
          <div className="stack__element">HTML</div>
          <div className="stack__element">CSS</div>
          <div className="stack__element">JS</div>
          <div className="stack__element">React</div>
          <div className="stack__element">Git</div>
          <div className="stack__element">Express.js</div>
          <div className="stack__element">mongoDB</div>
        </div>
      </wrapper>
    </section>
  )
}

export default Technology