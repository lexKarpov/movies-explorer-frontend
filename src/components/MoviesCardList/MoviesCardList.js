import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import filmsList from "../../constants/filmListTest";

function MoviesCardList({ isSaved }) {
  const findList = JSON.parse(localStorage.getItem('findList'))
  const savedList = localStorage.getItem('savedList')

  // const addButton = Array.from(localStorage.getItem('findList')).length > 3
  console.log('addButton')
  // console.log(addButton)

  // findList ? console.log(findList[0]) : null
 if(findList){
   // console.log(findList)
 }
  return (
    <section className="moviesCardList">
      <div className='moviesCardList__elements'>
        {isSaved ? savedList?.map(el => {
          if (el.isLiked) {
            return <MoviesCard data={el} key={el.id} />
          }
        })
          :
          findList?.map(el =>
            <MoviesCard data={el} key={el.id} />
          )
        }
      </div>
      {/*{isSaved || !findList || !addButton ? null : <button type="button" className="moviesCardList__more">Ещё</button>}*/}
      {isSaved || !findList ? null : <button type="button" className="moviesCardList__more">Ещё</button>}
    </section>
  )
}

export default MoviesCardList
