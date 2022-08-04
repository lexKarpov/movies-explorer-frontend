import './Student.css'
import me from '../../images/about/me.jpg'

function Student() {
  return (
    <section className="student">
      <wrapper className="student__wrapper">
        <h2 className="title">Студент</h2>
        <div className="student__profile">
              <h3 className="student__title">Алексей</h3>
              <h2 className="student__subtitle">Фронтенд-разработчик, 28 лет</h2>
            <p className="student__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <nav className="student__nav">
              <a className="link student__link" target="_blank" href="https://vk.com/doyouknowlechkarpov">VK</a>
              <a className="link student__link" target="_blank" href="https://github.com/lexKarpov">Github</a>
            </nav>
          <img src={me} className="student__photo"/>
        </div>
      </wrapper>
    </section>
  )
}

export default Student