import './dislike.css'

function dislike({dislikeCard}) {
  return (
    <button type="button" className="moviesCard__dislike" onClick={dislikeCard}/>
  )
}

export default  dislike
