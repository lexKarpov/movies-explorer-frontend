import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__info">
        <h1 className="notFound__title">404</h1>
        <h1 className="notFound__title">Страница не найдена</h1>
      </div>
      <Link className="notFound__redirect" to='/'>назад</Link>
    </div>
  )
}

export default NotFound