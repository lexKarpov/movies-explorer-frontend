import './SavedMovies.css'
import FormSearch from '../FormSearch/FormSearch'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function SavedMovies() {
  return (
    <main className="main main_type_movie">
      <FormSearch />
      <MoviesCardList isSaved={true} />
    </main>

  )
}

export default SavedMovies