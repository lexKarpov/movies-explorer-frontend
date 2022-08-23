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
import {register, authorize, getUserContent, patchUser} from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import CurrentUserContext from '../../contexts/CurrentUserContext'

function App() {
  const location = useLocation();
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false)
  // const [pageLogin, setPageLogin] = useState(false)
  const [currUser, setCurrentUser] = useState({})
  const [allFilms, setAllFilms] = useState({})
  const [isSelectedInfoTooltip, setIsSelectedInfoTooltip] = useState(false)
  const [isSelectedImageTooltip, setIsSelectedImageTooltip] = useState(false)
  useEffect(_ => {
    // api.getCards().then(res => setAllFilms(res)) // get all films in const allFilms
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      getUserContent(jwt)
        .then(res => {
          if (res) {
            // console.log('reboot')
            // console.log(res)
            setIsLogged(true)
            setCurrentUser(res)
            navigate('/')
          }
        })
        .catch((err) => console.log(err))
    }
  }, [])

  // console.log('this all films')
  // console.log(allFilms)
  function changePageLogin(val) {
    setIsLogged(val)
  }

  function logOut() {
    localStorage.clear()
    setIsLogged(false)
    navigate("/")
  }

  function logIn(data) {
    return authorize(data)
      .then(res => {
        localStorage.setItem('jwt', res.token)
        setIsSelectedImageTooltip(true)
        setIsSelectedInfoTooltip(true)
        const jwt = localStorage.getItem('jwt')
        getUserContent(jwt)
          .then(res => {
            if (res) {
              console.log('reboot')
              console.log(res)
              setIsLogged(true)
              setCurrentUser(res)
              navigate('/')
            }
          })
          .catch(err => {
            console.log(err)
            setIsSelectedImageTooltip(false)
            setIsSelectedInfoTooltip(false)
          })
      })
      .catch(err => {
        console.log(err)
        setIsSelectedImageTooltip(false)
        setIsSelectedInfoTooltip(false)
      })
  }


  function submitRegisterForm(e, data, nameForm) {
    e.preventDefault()
    nameForm === 'signup' ?
      register(data)
      .then(res => logIn(data))
      .catch(err => {
        console.log(err)
        setIsSelectedImageTooltip(false)
        setIsSelectedInfoTooltip(false)
      })
      : logIn(data)
  }

  function closeAllPopups() {
    setIsSelectedInfoTooltip(false)
  }

  function updateUser(data, beforeValueOfInputs) {
    console.log(data.name)

    if(data.name === beforeValueOfInputs.name){
      const user = {
        name: beforeValueOfInputs.name,
        email: data.email,}
      patchUser(user)
        .then(res => setCurrentUser(res))
        .catch(err => console.log(err))
    }
    if(data.email === beforeValueOfInputs.email){
      patchUser(
        {
        email: beforeValueOfInputs.email,
        name: data.name
        })
        .then(res => setCurrentUser(res))
        .catch(err => console.log(err))
    }
    if(data.email !== beforeValueOfInputs.email && data.name !== beforeValueOfInputs.name){
      patchUser(data)
        .then(res => setCurrentUser(res))
        .catch(err => console.log(err))
    }
  }

  return (
    <CurrentUserContext.Provider value = {currUser}>
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
            logOut={logOut}
            updateUser={updateUser}/>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <InfoTooltip
        onClose={closeAllPopups}
        isOpen={isSelectedInfoTooltip}
        succes={isSelectedImageTooltip}/>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
