import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import {useEffect, useState} from "react";
import useWindowDimensions from '../../utils/changeWindowDimentions'

function MoviesCardList({ isSaved}) {
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
  //1140 - infinity row 4
  //850 - 1140 row 3
  //700 - 850 row 2
  //0 - 700 row 5


  if (+numberOfMoviesDisplayed < 4){
    localStorage.setItem('numberOfMoviesDisplayed', rowNumber.toString())
    setNumberOfMoviesDisplayed(rowNumber.toString())
  }

  const findList = JSON.parse(localStorage.getItem('findList'))
  const savedList = localStorage.getItem('savedList')
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
  // console.log(rowNumber)
  // console.log(windowWidth)

  return (
    <section className="moviesCardList">
      <div className='moviesCardList__elements'>
        {isSaved ? savedList?.map(el => {
            if (el.isLiked) {
              return <MoviesCard data={el} key={el.id}/>
            }
          })
          :
          findList?.length - limitCoin <= 1 ?
            findList?.map((el) => <MoviesCard data={el} key={el.id}/>)
            :
            findList?.length > 4 ?
              findList.slice(0, limitCoin).map((el) => <MoviesCard data={el} key={el.id}/>)
              :
              findList?.length<4 && findList?.length>0 ?
                findList.map((el) => <MoviesCard data={el} key={el.id}/>)
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
// import {useState} from "react";
//
// function MoviesCardList({ isSaved, research}) {
//   const [asd, setAsd] = useState(false)
//   let numberOfMoviesDisplayed = Number(localStorage.getItem('numberOfMoviesDisplayed'))
//   if (numberOfMoviesDisplayed < 4){
//     localStorage.setItem('numberOfMoviesDisplayed', '4')
//     setAsd(!asd)
//   }
//   console.log(localStorage.getItem('numberOfMoviesDisplayed'))
//
//   const findList = JSON.parse(localStorage.getItem('findList'))
//   const savedList = localStorage.getItem('savedList')
//   const [limitCoin, setLimitCoin] = useState(numberOfMoviesDisplayed)
//   const [buttonVisible, setButtonVisible] = useState(false)
//   // if(research){
//   //   setLimitCoin(numberOfMoviesDisplayed-numberOfMoviesDisplayed)
//   // }
//   function renderLimiter(val= 0) {
//     setLimitCoin((prev)=> prev + 4)
//     localStorage.setItem('numberOfMoviesDisplayed', (limitCoin + 4).toString())
//   }
//
//   function disableButton(){
//     setButtonVisible(true)
//   }
//
//   //
//   // console.log(limitCoin)
//   // console.log(findList)
//   console.log(localStorage.getItem('numberOfMoviesDisplayed'))
//   if(limitCoin >= findList?.length){
//     setLimitCoin(findList.length - 1)
//     disableButton()
//   }
//
//   return (
//     <section className="moviesCardList">
//       <div className='moviesCardList__elements'>
//         {isSaved ? savedList?.map(el => {
//             if (el.isLiked) {
//               return <MoviesCard data={el} key={el.id}/>
//             }
//           })
//           :
//           findList?.length - limitCoin <= 1 ?
//             findList?.map((el) => <MoviesCard data={el} key={el.id}/>)
//             :
//             findList?.length > 4 ?
//               findList.slice(0, limitCoin).map((el) => <MoviesCard data={el} key={el.id}/>)
//               :
//               findList?.length<4 && findList?.length>0 ?
//                 findList.map((el) => <MoviesCard data={el} key={el.id}/>)
//                 : null
//         }
//       </div>
//       {/*{isSaved || !findList || !addButton ? null : <button type="button" className="moviesCardList__more">Ещё</button>}*/}
//       {isSaved || !findList || buttonVisible ? null : <button type="button" className="moviesCardList__more" onClick={renderLimiter}>Ещё</button>}
//     </section>
//   )
// }
//
// export default MoviesCardList



// import MoviesCard from '../MoviesCard/MoviesCard'
// import './MoviesCardList.css'
// import {useState} from "react";
//
// function MoviesCardList({ isSaved, research}) {
//   const [asd, setAsd] = useState(false)
//   const [numberOfMoviesDisplayed, setNumberOfMoviesDisplayed] = useState(localStorage.getItem('numberOfMoviesDisplayed'))
//
//   if (+numberOfMoviesDisplayed < 4){
//     localStorage.setItem('numberOfMoviesDisplayed', '4')
//     setNumberOfMoviesDisplayed('4')
//   }
//   console.log(localStorage.getItem('numberOfMoviesDisplayed'))
//
//   const findList = JSON.parse(localStorage.getItem('findList'))
//   const savedList = localStorage.getItem('savedList')
//   const [limitCoin, setLimitCoin] = useState(Number(numberOfMoviesDisplayed))
//   const [buttonVisible, setButtonVisible] = useState(false)
//   // if(research){
//   //   setLimitCoin(numberOfMoviesDisplayed-numberOfMoviesDisplayed)
//   // }
//   function renderLimiter(val= 0) {
//     setLimitCoin((prev)=> prev + 4)
//     localStorage.setItem('numberOfMoviesDisplayed', (+limitCoin + 4).toString())
//   }
//
//   function disableButton(){
//     setButtonVisible(true)
//   }
//
//
//   // console.log(limitCoin)
//   // console.log(findList)
//   console.log(localStorage.getItem('numberOfMoviesDisplayed'))
//   if(limitCoin >= findList?.length){
//     setLimitCoin(findList.length - 1)
//     disableButton()
//   }
//
//   return (
//     <section className="moviesCardList">
//       <div className='moviesCardList__elements'>
//         {isSaved ? savedList?.map(el => {
//             if (el.isLiked) {
//               return <MoviesCard data={el} key={el.id}/>
//             }
//           })
//           :
//           findList?.length - limitCoin <= 1 ?
//             findList?.map((el) => <MoviesCard data={el} key={el.id}/>)
//             :
//             findList?.length > 4 ?
//               findList.slice(0, limitCoin).map((el) => <MoviesCard data={el} key={el.id}/>)
//               :
//               findList?.length<4 && findList?.length>0 ?
//                 findList.map((el) => <MoviesCard data={el} key={el.id}/>)
//                 : null
//         }
//       </div>
//       {/*{isSaved || !findList || !addButton ? null : <button type="button" className="moviesCardList__more">Ещё</button>}*/}
//       {isSaved || !findList || buttonVisible ? null : <button type="button" className="moviesCardList__more" onClick={renderLimiter}>Ещё</button>}
//     </section>
//   )
// }
//
// export default MoviesCardList
