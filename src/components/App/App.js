import './App.css';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from '../Main/Main'
import Login from "../Login/Login";
import React, { useState, useEffect } from "react";
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import EditProfile from '../EditProfile/EditProfile';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import api from '../../utils/MoviesApi';
import {register, authorize} from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function App() {
  const location = useLocation();
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false)
  const [pageLogin, setPageLogin] = useState(false)
  const [allFilms, setAllFilms] = useState({})
  const [isSelectedInfoTooltip, setIsSelectedInfoTooltip] = useState(false)
  const [isSelectedImageTooltip, setIsSelectedImageTooltip] = useState(false)
  // useEffect(_ => {
  //   api.getCards().then(res => setAllFilms(res)) // get all films in const allFilms
  // }, [])
  //
  // console.log('this all films')
  // console.log(allFilms)
  function changePageLogin() {
    setPageLogin(true)
  }

  function logOut() {
    setIsLogged(false)
    navigate("/")
  }

  function submitRegisterForm(e, data, nameForm) {
    e.preventDefault()
    console.log('asd')
    console.log(data)
    nameForm === 'signup' ?
      register(data)
      .then(res => {
        setIsSelectedImageTooltip(true)
        setIsSelectedInfoTooltip(true)
        setIsLogged(true)
        navigate("/")
      })
      .catch(err => {
        console.log(err)
        setIsSelectedImageTooltip(false)
        setIsSelectedInfoTooltip(false)
      })
      :
      authorize(data)
        .then(res => {
          setIsSelectedImageTooltip(true)
          setIsSelectedInfoTooltip(true)
          setIsLogged(true)
          navigate("/")
        })
        .catch(err => {
          console.log(err)
          setIsSelectedImageTooltip(false)
          setIsSelectedInfoTooltip(false)
        })
  }

  function closeAllPopups() {
    setIsSelectedInfoTooltip(false)
  }

console.log(isLogged)
  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={
            <Register
              isLogged={isLogged}
              pageLogin={changePageLogin}
              submitRegisterForm={submitRegisterForm}/>
          } />
        <Route
          path="/signin"
          element={
            <Login
              isLogged={isLogged}
              pageLogin={changePageLogin}
              submitRegisterForm={submitRegisterForm}/>
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
      <InfoTooltip
        onClose={closeAllPopups}
        isOpen={isSelectedInfoTooltip}
        succes={isSelectedImageTooltip}/>
    </div>
  );
}

export default App;
