import './MoviesCard.css'
import Like from "../Like/Like";
import Dislike from "../dislike/dislike";
import Preloader from "../Preloader/Preloader";

const BASE_URL = 'https://api.nomoreparties.co'

function MoviesCard({data, postLike, deleteCard, isSaved, id, testRender, isLike}) {
  let { nameRU, duration, image, trailerLink } = data
  let timeLength = `${Math.floor(duration / 60)}ч ${duration % 60 ? duration % 60 + 'м' : ''}`
  if(timeLength[0] === '0'){
    timeLength = timeLength.split(' ')[1]
  }
  if(!isSaved){
    image = `${BASE_URL}${data.image.url}`
  }

  function dislikeCard() {
    const deleteCurrentCard = JSON.parse(localStorage.getItem('savedMoviesList')).filter(el => el.nameRU === nameRU)
    deleteCard(deleteCurrentCard[0]._id)
  }

  return (
    <div className="moviesCard">
      <figure className="moviesCard__image-block">
        <a className="moviesCard__link" target="_blank" href={trailerLink}>
        <img alt="превью фильма" className="moviesCard__preview" src={image} />
        </a>
        <div className="moviesCard__desc">
          <p className="moviesCard__caption">{nameRU}</p>
          {isSaved ? <Dislike dislikeCard={dislikeCard}/> : <Like postLike={postLike} id={id} dislikeCard={dislikeCard} isLike={isLike}/>}
        </div>
      </figure>
      <p className="moviesCard__length">{timeLength}</p>
    </div>
  )
}
export default MoviesCard
