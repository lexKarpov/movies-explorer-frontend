import './SavedMovies.css'
import FormSearch from '../FormSearch/FormSearch'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function SavedMovies({ isLogged, pageLogin }) {
  return (
    <main className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <FormSearch />
      <MoviesCardList isSaved={true} />
      <Footer isLog={isLogged} />
    </main>

  )
}

export default SavedMovies