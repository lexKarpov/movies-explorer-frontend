import './SavedMovies.css'
import FormSearch from '../FormSearch/FormSearch'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies({ isLogged, pageLogin, findFilms, handleSmallMetr, toggleSmallMeter }) {
  return (
    <div className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main className="main__films">
        <FormSearch findFilms={findFilms} handleSmallMetr={handleSmallMetr} toggleSmallMeter={toggleSmallMeter}/>
        <MoviesCardList isSaved={true} />
      </main>
      <Footer isLog={isLogged} />
    </div>

  )
}

export default SavedMovies
