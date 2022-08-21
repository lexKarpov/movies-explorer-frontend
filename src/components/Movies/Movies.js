import './Movies.css'
import FormSearch from '../FormSearch/FormSearch'
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer'

function Movies({ isLogged, pageLogin }) {
  return (
    <div className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main>
        <FormSearch />
        <MoviesCardList isSaved={false} />
        <Footer isLog={isLogged} />
      </main>
    </div>
  )
}

export default Movies