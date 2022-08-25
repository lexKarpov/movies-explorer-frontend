import './Like.css'
import {useState} from "react";

function Like({postLike, id}) {
  const [itlike, setLike] = useState(false)
  const isLiked = itlike ? 'moviesCard__like_active' : ''
  function changeLike() {
    postLike(id)
    setLike(!itlike)
  }
  return (
    <button type="button" className={`moviesCard__like ${isLiked}`} onClick={changeLike}/>
  )
}

export default Like
