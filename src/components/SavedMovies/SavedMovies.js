import './SavedMovies.css'
import FormSearch from '../FormSearch/FormSearch'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies({ isLogged, pageLogin }) {
  return (
    <div className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main>
        <FormSearch />
        <MoviesCardList isSaved={true} />
      </main>
      <Footer isLog={isLogged} />
    </div>

  )
}

export default SavedMovies