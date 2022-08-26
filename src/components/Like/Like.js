import './Like.css'
import {useState} from "react";

function Like({postLike, id, dislikeCard, isLike}) {
  const [itlike, setLike] = useState(false)
  // console.log('isLike in card')
  // console.log(isLike)
  const isLiked = isLike.length ? 'moviesCard__like_active' : ''
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
    // setLike(!itlike)
  }


  return (
    <button type="button" className={`moviesCard__like ${isLiked}`} onClick={changeLike}/>
  )
}

export default Like
