import './App.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Login from "../Login/Login";
import React, { useState } from "react";
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import EditProfile from '../EditProfile/EditProfile';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';

function App() {
  const location = useLocation();
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true)
  const [pageLogin, setPageLogin] = useState(false)

  function changePageLogin() {
    setPageLogin(true)
  }

  function logOut() {
    setIsLogged(false)
    navigate("/")
  }

  return (
    <div className="App">
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login pageLogin={changePageLogin} />} />
        {isLogged ? <Route path="/" element={<Movies className="page" />} /> : <Route path="/" element={<Main className="page" />} />}
        <Route path="/saveFilms" element={<SavedMovies />} />
        <Route path="/films" element={<Movies />} />
        <Route path="/editProfile" element={<EditProfile logOut={logOut} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      {
        location.pathname !== '/signin' &&
        location.pathname !== '/signup' &&
        location.pathname !== '/editProfile' &&
        <Footer isLog={isLogged} pageLogin={pageLogin} />
      }
    </div>
  );
}

export default App;
