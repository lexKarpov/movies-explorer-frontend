import './Movies.css'
import FormSearch from '../FormSearch/FormSearch'

import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main className="main main_type_movie">
      <FormSearch />
      <MoviesCardList isSaved={false} />
    </main>
  )
}

export default Movies