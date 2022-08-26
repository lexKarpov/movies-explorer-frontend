import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import {useEffect, useState} from "react";
import useWindowDimensions from '../../utils/changeWindowDimentions'

function MoviesCardList({ isSaved, postLike, testRender, deleteCard}) {


  //==========================================================
  const [numberOfMoviesDisplayed, setNumberOfMoviesDisplayed] = useState(localStorage.getItem('numberOfMoviesDisplayed'))
  let windowWidth = useWindowDimensions().width
  let rowNumber
  if(windowWidth<700){
    rowNumber = 5
  }
  else if(windowWidth>=700 && windowWidth<850){
    rowNumber = 2
  }
  else if(windowWidth>=850 && windowWidth<1140){
    rowNumber = 3
  }
  else {
    rowNumber = 4
  }

  if (+numberOfMoviesDisplayed < 4){
    localStorage.setItem('numberOfMoviesDisplayed', rowNumber.toString())
    setNumberOfMoviesDisplayed(rowNumber.toString())
  }

  const findList = JSON.parse(localStorage.getItem('findList'))
  const savedList = JSON.parse(localStorage.getItem('savedMoviesList'))
  const [limitCoin, setLimitCoin] = useState(Number(numberOfMoviesDisplayed))
  const [buttonVisible, setButtonVisible] = useState(false)

  function renderLimiter(val= 0) {
    setLimitCoin((prev)=> prev + rowNumber)
    localStorage.setItem('numberOfMoviesDisplayed', (+limitCoin + rowNumber).toString())
  }

  function disableButton(val){
    setButtonVisible(val)
  }

  useEffect(()=> {
    if(Number(localStorage.getItem('numberOfMoviesDisplayed')) === 0){
      localStorage.setItem('numberOfMoviesDisplayed', rowNumber.toString())
      setLimitCoin(rowNumber)
      disableButton(false)
  }}, [localStorage.getItem('numberOfMoviesDisplayed'), windowWidth])




  if(limitCoin >= findList?.length){
    setLimitCoin(findList.length - 1)
    disableButton(true)
  }
  //

  // function dislikeCard() {
  //   if(isSaved){
  //     deleteCard()
  //   }
  //   console.log('deleteCard')
  // }
  // nameRU, duration, image, trailerLink, id
  return (
    <section className="moviesCardList">
      <div className='moviesCardList__elements'>
        {isSaved ? savedList?.map(el => <MoviesCard
            data={el}
            id ={el.movieId? el.movieId : el._id}
            key={el.movieId + Math.random()}
            // dislikeCard={dislikeCard}
            isSaved={true}
            testRender={testRender}
            deleteCard={deleteCard}
          />)
        // {isSaved ? null
          :
          findList?.length - limitCoin <= 1 ?
            findList?.map((el) => <MoviesCard data={el} key={el.id} postLike={postLike} id = {el.id}/>)
            :
            findList?.length > 4 ?
              findList.slice(0, limitCoin).map((el) => <MoviesCard postLike={postLike} data={el} key={el.id} id = {el.id}/>)
              :
              findList?.length<4 && findList?.length>0 ?
                findList.map((el) => <MoviesCard data={el} key={el.id} postLike={postLike} id = {el.id}/>)
                : null
        }
      </div>
      {isSaved || !findList || buttonVisible ? null : <button type="button" className="moviesCardList__more" onClick={renderLimiter}>Ещё</button>}
    </section>
  )
}

export default MoviesCardList


//
// import MoviesCard from '../MoviesCard/MoviesCard'
// import './MoviesCardList.css'
// import {useEffect, useState} from "react";
// import useWindowDimensions from '../../utils/changeWindowDimentions'
//
// function MoviesCardList({ isSaved, postLike}) {
//   const [numberOfMoviesDisplayed, setNumberOfMoviesDisplayed] = useState(localStorage.getItem('numberOfMoviesDisplayed'))
//   let windowWidth = useWindowDimensions().width
//   let rowNumber
//   if(windowWidth<700){
//     rowNumber = 5
//   }
//   else if(windowWidth>=700 && windowWidth<850){
//     rowNumber = 2
//   }
//   else if(windowWidth>=850 && windowWidth<1140){
//     rowNumber = 3
//   }
//   else {
//     rowNumber = 4
//   }
//   //1140 - infinity row 4
//   //850 - 1140 row 3
//   //700 - 850 row 2
//   //0 - 700 row 5
//
//
//   if (+numberOfMoviesDisplayed < 4){
//     localStorage.setItem('numberOfMoviesDisplayed', rowNumber.toString())
//     setNumberOfMoviesDisplayed(rowNumber.toString())
//   }
//
//   const findList = JSON.parse(localStorage.getItem('findList'))
//   const savedList = JSON.parse(localStorage.getItem('savedMoviesList'))
//   const [limitCoin, setLimitCoin] = useState(Number(numberOfMoviesDisplayed))
//   const [buttonVisible, setButtonVisible] = useState(false)
//
//   function renderLimiter(val= 0) {
//     setLimitCoin((prev)=> prev + rowNumber)
//     localStorage.setItem('numberOfMoviesDisplayed', (+limitCoin + rowNumber).toString())
//   }
//
//   function disableButton(val){
//     setButtonVisible(val)
//   }
//
//   useEffect(()=> {
//     if(Number(localStorage.getItem('numberOfMoviesDisplayed')) === 0){
//       localStorage.setItem('numberOfMoviesDisplayed', rowNumber.toString())
//       setLimitCoin(rowNumber)
//       disableButton(false)
//     }}, [localStorage.getItem('numberOfMoviesDisplayed'), windowWidth, localStorage.getItem('savedMoviesList')])
//
//
//   if(limitCoin >= findList?.length){
//     setLimitCoin(findList.length - 1)
//     disableButton(true)
//   }
//   //
//   // console.log(rowNumber)
//   // console.log(windowWidth)
//   function deleteCard() {
//     console.log('deleteCard')
//   }
//   return (
//     <section className="moviesCardList">
//       <div className='moviesCardList__elements'>
//         {isSaved ? savedList?.map(el => <MoviesCard data={el} key={el.movieId + Math.random()} deleteCard={deleteCard} isSaved={true}/>)
//           // {isSaved ? null
//           :
//           findList?.length - limitCoin <= 1 ?
//             findList?.map((el) => <MoviesCard data={el} key={el.id} postLike={postLike}/>)
//             :
//             findList?.length > 4 ?
//               findList.slice(0, limitCoin).map((el) => <MoviesCard postLike={postLike} data={el} key={el.id}/>)
//               :
//               findList?.length<4 && findList?.length>0 ?
//                 findList.map((el) => <MoviesCard data={el} key={el.id} postLike={postLike}/>)
//                 : null
//         }
//       </div>
//       {isSaved || !findList || buttonVisible ? null : <button type="button" className="moviesCardList__more" onClick={renderLimiter}>Ещё</button>}
//     </section>
//   )
// }
//
// export default MoviesCardList
