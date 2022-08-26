import './Movies.css'
import FormSearch from '../FormSearch/FormSearch'
import Header from '../Header/Header';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from '../Footer/Footer'

function Movies({ isLogged, pageLogin, findFilms, handleSmallMetr, toggleSmallMeter, postLike, deleteCard}) {

  return (
    <div className="main main_type_movie">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <main className="main__films">
        <FormSearch findFilms={findFilms} handleSmallMetr = {handleSmallMetr} toggleSmallMeter={toggleSmallMeter}/>
        <MoviesCardList isSaved={false} postLike={postLike} deleteCard={deleteCard}/>
        <Footer isLog={isLogged} />
      </main>
    </div>
  )
}

export default Movies
