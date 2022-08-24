import './MoviesCard.css'

const BASE_URL = 'https://api.nomoreparties.co/'

function MoviesCard(props) {
  const { nameRU, duration, image, trailerLink } = props.data
  const timeLength = `${Math.floor(duration / 60)}ч ${duration % 60 ? duration % 60 + 'м' : ''}`
  return (
    <div className="moviesCard">
      <figure className="moviesCard__image-block">
        <a className="moviesCard__link" target="_blank" href={trailerLink}>
        <img alt="превью фильма" className="moviesCard__preview" src={`${BASE_URL}${image.url.slice(1, -1)}g`} />
        </a>
        <div className="moviesCard__desc">
          <p className="moviesCard__caption">{nameRU}</p>
          <button type="button" className="moviesCard__like"/>
        </div>

      </figure>
      <p className="moviesCard__length">{timeLength}</p>
    </div>
  )
}
export default MoviesCard
