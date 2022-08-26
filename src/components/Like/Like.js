import './Like.css'

function Like({postLike, id, dislikeCard, isLike}) {
  const isLiked = isLike?.length ? 'moviesCard__like_active' : ''
  function changeLike() {
    if(isLiked){
      dislikeCard(id)
    }else{
      postLike(id)
    }
  }

  return (
    <button type="button" className={`moviesCard__like ${isLiked}`} onClick={changeLike}/>
  )
}

export default Like
