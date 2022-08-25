import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import {useEffect, useState} from "react";

function MoviesCardList({ isSaved}) {
  const [numberOfMoviesDisplayed, setNumberOfMoviesDisplayed] = useState(localStorage.getItem('numberOfMoviesDisplayed'))

  if (+numberOfMoviesDisplayed < 4){
    localStorage.setItem('numberOfMoviesDisplayed', '4')
    setNumberOfMoviesDisplayed('4')
  }

  const findList = JSON.parse(localStorage.getItem('findList'))
  const savedList = localStorage.getItem('savedList')
  const [limitCoin, setLimitCoin] = useState(Number(numberOfMoviesDisplayed))
  const [buttonVisible, setButtonVisible] = useState(false)

  function renderLimiter(val= 0) {
    setLimitCoin((prev)=> prev + 4)
    localStorage.setItem('numberOfMoviesDisplayed', (+limitCoin + 4).toString())
  }

  function disableButton(val){
    setButtonVisible(val)
  }

  useEffect(()=> {
    if(Number(localStorage.getItem('numberOfMoviesDisplayed')) === 0){
      localStorage.setItem('numberOfMoviesDisplayed', '4')
      setLimitCoin(4)
      disableButton(false)
  }}, [localStorage.getItem('numberOfMoviesDisplayed')])


  if(limitCoin >= findList?.length){
    setLimitCoin(findList.length - 1)
    disableButton(true)
  }
  console.log("localStorage.getItem('numberOfMoviesDisplayed')")
  console.log(localStorage.getItem('numberOfMoviesDisplayed'))
  console.log("limitCoin")
  console.log(limitCoin)
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
