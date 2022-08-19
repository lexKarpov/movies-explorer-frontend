import './Movies.css'
import FormSearch from '../FormSearch/FormSearch'
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer'

function Movies({ isLogged, pageLogin }) {
  return (
    <main className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <FormSearch />
      <MoviesCardList isSaved={false} />
      <Footer isLog={isLogged} />
    </main>
  )
}

export default Movies