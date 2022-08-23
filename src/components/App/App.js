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
      <Routes>
        <Route
          path="/signup"
          element={
            <Register
              isLogged={isLogged}
              pageLogin={changePageLogin} />
          } />
        <Route
          path="/signin"
          element={
            <Login
              isLogged={isLogged}
              pageLogin={changePageLogin} />
          } />
        {
          isLogged ?
            <Route path="/" element={
              <Movies
                isLogged={isLogged}
                pageLogin={changePageLogin}
                className="page" />} />
            :
            <Route path="/" element={
              <Main
                isLogged={isLogged}
                pageLogin={changePageLogin}
                className="page" />} />
        }

        <Route path="/saveFilms" element={
          <SavedMovies
            isLogged={isLogged}
            pageLogin={changePageLogin} />} />

        <Route path="/films" element={
          <Movies
            isLogged={isLogged}
            pageLogin={changePageLogin} />
        } />

        <Route path="/editProfile" element={
          <EditProfile
            isLogged={isLogged}
            pageLogin={changePageLogin}
            logOut={logOut} />
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
