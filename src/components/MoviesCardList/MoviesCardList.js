import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import {useEffect, useState} from "react";
import useWindowDimensions from '../../utils/changeWindowDimentions'
import {useCurrentWidth} from "../../hooks/useCurrentWidth";
import {getInitialCount, getLoadStep} from "../../utils/getLoadStep";

function MoviesCardList({ isSaved, postLike, testRender, deleteCard, refresh}) {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('findList')))
  const savedList = JSON.parse(localStorage.getItem('savedMoviesList'))
  let windowWidth = useCurrentWidth()
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(getInitialCount(windowWidth))
  const [buttonVisible, setButtonVisible] = useState(false)

  function renderLimiter() {
    setVisibleMoviesCount((prevCount) => prevCount + getLoadStep(windowWidth))
  }
  useEffect(() => {
    if(movies?.length - visibleMoviesCount <=0){
      setButtonVisible(true)
    }
  }, [windowWidth, visibleMoviesCount])


  return (
    <section className="moviesCardList">
      <div className='moviesCardList__elements'>
        {
          isSaved ? savedList?.map(el => <MoviesCard
              data={el}
              id={el.movieId ? el.movieId : el._id}
              key={el.movieId + Math.random()}
              isSaved={true}
              testRender={testRender}
              deleteCard={deleteCard}
            />)
            :
          movies?.slice(0, visibleMoviesCount).map(el => {
            let isLike = savedList?.filter(savedListEl => savedListEl.movieId === el.id)
              return (
              <MoviesCard
                data={el}
                id={el.id}
                key={el.id + Math.random()}
                isSaved={false}
                testRender={testRender}
                deleteCard={deleteCard}
                postLike={postLike}
                isLike={isLike}
              />
              )
          })
        }

      </div>
      {isSaved || !movies || buttonVisible ? null : <button type="button" className="moviesCardList__more" onClick={renderLimiter}>Ещё</button>}
    </section>
  )
}

export default MoviesCardList
