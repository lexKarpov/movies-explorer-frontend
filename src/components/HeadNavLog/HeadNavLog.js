
import { Link } from "react-router-dom";
import './HeadNavLog.css'
function HeadNavLog() {
  return (
    <nav className="navigation-log">
      <Link className="navigation-log__link" to='/films'>Фильмы</Link>
      <Link className="navigation-log__link" to='/saveFilms'>Сохранённые фильмы</Link>
    </nav>
  )
}

export default HeadNavLog