import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import filmsList from "../../constants/filmListTest";

function MoviesCardList({ isSaved }) {
  return (
    <section className="moviesCardList">
      <div className='moviesCardList__elements'>
        {isSaved ? filmsList.map(el => {
          if (el.isLiked) {
            return <MoviesCard data={el} key={el.id} />
          }
        })
          :
          filmsList.map(el =>
            <MoviesCard data={el} key={el.id} />
          )
        }
      </div>
      <button type="button" className="moviesCardList__more">Ещё</button>
    </section>
  )
}

export default MoviesCardList