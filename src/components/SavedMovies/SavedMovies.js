import './SavedMovies.css'
import FormSearch from '../FormSearch/FormSearch'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from "../Preloader/Preloader";

function SavedMovies({ isLogged, pageLogin, findFilms, handleSmallMetr, toggleSmallMeter, testRender, deleteCard, preloader }) {

  return (
    <div className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main className="main__films">
        {
          preloader ?
            <Preloader/>
            :
            <>
              <FormSearch findFilms={findFilms} handleSmallMetr={handleSmallMetr} toggleSmallMeter={toggleSmallMeter}/>
              <MoviesCardList isSaved={true} testRender={testRender} deleteCard={deleteCard}/>
            </>
        }
      </main>
      <Footer isLog={isLogged} />
    </div>

  )
}

export default SavedMovies
