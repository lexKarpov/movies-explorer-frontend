import './MoviesCard.css'

function MoviesCard (props) {
  const {nameRU, duration, image} = props.data
  const timeLength = `${Math.floor(duration/60)}ч ${duration%60 ? duration%60 + 'м': ''}`
  return (
      <div className="moviesCard">
        <figure className="moviesCard__image-block">
          <img className="moviesCard__preview" src={image}/>
          <figcaption className="moviesCard__caption">{nameRU}</figcaption>
          <button className="moviesCard__like"></button>
        </figure>
        <p className="moviesCard__length">{timeLength}</p>
      </div>
  )
}
export default MoviesCard