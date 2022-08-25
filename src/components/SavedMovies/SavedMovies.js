import './SavedMovies.css'
import FormSearch from '../FormSearch/FormSearch'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {getSavedFilms} from "../../utils/MainApi";
import {useContext, useEffect, useState} from "react";

// import CurrentUserContext from '../../contexts/CurrentUserContext'

function SavedMovies({ isLogged, pageLogin, findFilms, handleSmallMetr, toggleSmallMeter, testRender }) {
  // const [savedMovies, setSavedMovies] = useState([])
  // const user = useContext(CurrentUserContext)
  // useEffect(()=>{
  //   console.log('getSavedMovies')
  //   console.log(JSON.parse(localStorage.getItem('savedMoviesList')))
  //
  //   console.log('user')
  //   console.log(user)
  // }, [])

  return (
    <div className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main className="main__films">
        <FormSearch findFilms={findFilms} handleSmallMetr={handleSmallMetr} toggleSmallMeter={toggleSmallMeter}/>
        <MoviesCardList isSaved={true} testRender={testRender}/>
      </main>
      <Footer isLog={isLogged} />
    </div>

  )
}

export default SavedMovies
