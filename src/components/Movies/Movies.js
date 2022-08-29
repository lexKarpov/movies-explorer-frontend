import './Movies.css'
import FormSearch from '../FormSearch/FormSearch'
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer'
import Preloader from "../Preloader/Preloader";
import {useEffect, useState} from "react";
function Movies({ isLogged, pageLogin, findFilms, handleSmallMetr, toggleSmallMeter, postLike, deleteCard, preloader}) {
  const [refresh, setRefresh] = useState(false)
  useEffect(() => setRefresh(!refresh), [preloader])
  return (
    <div className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main className="main__films">
        {
          preloader?
            <Preloader/>
            :
            <>
              <FormSearch findFilms={findFilms} handleSmallMetr = {handleSmallMetr} toggleSmallMeter={toggleSmallMeter}/>
              <MoviesCardList isSaved={false} postLike={postLike} deleteCard={deleteCard} refresh={refresh}/>
              <Footer isLog={isLogged} />
            </>
        }
      </main>
    </div>
  )
}

export default Movies
