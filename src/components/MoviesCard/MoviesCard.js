import './MoviesCard.css'
import Like from "../Like/Like";
import Dislike from "../dislike/dislike";
import Preloader from "../Preloader/Preloader";

const BASE_URL = 'https://api.nomoreparties.co/'

function MoviesCard({data, postLike, deleteCard, isSaved, id, testRender}) {
  let { nameRU, duration, image, trailerLink } = data

  let timeLength = `${Math.floor(duration / 60)}ч ${duration % 60 ? duration % 60 + 'м' : ''}`

  if(timeLength[0] === '0'){
    timeLength = timeLength.split(' ')[1]
  }
  if(!isSaved){
    image = `https://api.nomoreparties.co${data.image.url}`
  }

  function dislikeCard() {
    deleteCard(data._id)
    // console.log('deleteCard')
  }

  return (
    <div className="moviesCard">
      <figure className="moviesCard__image-block">
        <a className="moviesCard__link" target="_blank" href={trailerLink}>
        {/*<img alt="превью фильма" className="moviesCard__preview" src={`${BASE_URL}${image.url.slice(1, -1)}g`} />*/}
        <img alt="превью фильма" className="moviesCard__preview" src={image} />
        {/*<img alt="превью фильма" className="moviesCard__preview" src={`${BASE_URL}${image.formats.small.url}${image.formats.small.ext}`} />*/}
        </a>
        <div className="moviesCard__desc">
          <p className="moviesCard__caption">{nameRU}</p>
          {/*<button type="button" className="moviesCard__like"/>*/}

          {isSaved ? <Dislike dislikeCard={dislikeCard}/> : <Like postLike={postLike} id={id}/>}

        </div>

      </figure>
      <p className="moviesCard__length">{timeLength}</p>
    </div>
  )
}
export default MoviesCard
