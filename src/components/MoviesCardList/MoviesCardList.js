import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import {useState} from "react";

function MoviesCardList({ isSaved }) {
  const findList = JSON.parse(localStorage.getItem('findList'))
  const savedList = localStorage.getItem('savedList')
  const [limitCoin, setLimitCoin] = useState(4)
  const [buttonVisible, setButtonVisible] = useState(false)

  function renderLimiter(val= 0) {
   setLimitCoin((prev)=> prev + 4)
  }

  function disableButton(){
    setButtonVisible(true)
  }


  console.log(limitCoin)
  console.log(findList)
  if(limitCoin >= findList?.length){
    setLimitCoin(findList.length - 1)
    disableButton()
  }

  return (
    <section className="moviesCardList">
      <div className='moviesCardList__elements'>
        {isSaved ? savedList?.map(el => {
          if (el.isLiked) {
            return <MoviesCard data={el} key={el.id}/>
          }
        })
          :
          findList?
          findList
          .slice(0, limitCoin)
          .map((el) => <MoviesCard data={el} key={el.id}/>)
        : null
        }
      </div>
      {/*{isSaved || !findList || !addButton ? null : <button type="button" className="moviesCardList__more">Ещё</button>}*/}
      {isSaved || !findList || buttonVisible ? null : <button type="button" className="moviesCardList__more" onClick={renderLimiter}>Ещё</button>}
    </section>
  )
}

export default MoviesCardList
