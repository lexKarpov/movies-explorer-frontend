import './Like.css'

function Like({postLike, id, dislikeCard, isLike}) {
  const isLiked = isLike?.length ? 'moviesCard__like_active' : ''
  function changeLike() {
    if(isLiked){
      console.log('state when active')
      console.log(isLiked.toString())
      dislikeCard(id)
    }else{
      console.log('state when noactive')
      console.log(isLiked.toString())
      postLike(id)
    }
  }

  return (
    <button type="button" className={`moviesCard__like ${isLiked}`} onClick={changeLike}/>
  )
}

export default Like
