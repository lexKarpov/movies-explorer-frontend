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
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false)
  const [currUser, setCurrentUser] = useState({})
  const [isSelectedInfoTooltip, setIsSelectedInfoTooltip] = useState(false)
  const [isSelectedImageTooltip, setIsSelectedImageTooltip] = useState(false)
  const [toggleSmallMeter, setToggleSmallMeter] = useState(false)
  const [reactionsOnSearch, setReactionsOnSearch] = useState(false)

  const [noResult, setNoResult] = useState(false)
  const [text, setText] = useState('')

  useEffect(_ => {
    // api.getCards().then(res => setAllFilms(res)) // get all films in const allFilms
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      getUserContent(jwt)
        .then(res => {
          if (res) {
            setIsLogged(true)
            setCurrentUser(res)
            navigate('/')
          }
        })
        .catch((err) => console.log(err))
    }
  }, [])


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
        setText('Вы успешно зарегистрировались!')
        const jwt = localStorage.getItem('jwt')
        getUserContent(jwt)
          .then(res => {
            if (res) {
              setIsLogged(true)
              setCurrentUser(res)
              navigate('/')
            }
          })
          .catch(err => {
            console.log(err)
            setIsSelectedImageTooltip(false)
            setIsSelectedInfoTooltip(false)
            setText('Что-то пошло не так! Попробуйте ещё раз.')
          })
      })
      .catch(err => {
        console.log(err)
        setIsSelectedImageTooltip(false)
        setIsSelectedInfoTooltip(false)
        setText('Что-то пошло не так! Попробуйте ещё раз.')
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

  function findAllFilms(e, val) {
    e.preventDefault()
    if(!val){
      console.log('novalue')
      return null
    }
    val = val.toLowerCase()
    api.getCards().then(res => {
    let list = res.filter(el => el.nameRU.toLowerCase().includes(val))
      if( list.length === 0 ){
        setNoResult(true)
        setIsSelectedImageTooltip(false)
        setIsSelectedInfoTooltip(true)
        setText('Ничего не найдено.')
        console.log('this it')
        return null
      }
      if(!toggleSmallMeter){
        localStorage.setItem('findList', JSON.stringify(list))
        localStorage.setItem('smallMeter', toggleSmallMeter.toString())
        localStorage.setItem('valInput', val)
        setReactionsOnSearch(!reactionsOnSearch)
      }else{
        list = list.filter(el => el.duration < 40)
        localStorage.setItem('findList', JSON.stringify(list))
        localStorage.setItem('smallMeter', toggleSmallMeter.toString())
        localStorage.setItem('valInput', val)
        setReactionsOnSearch(!reactionsOnSearch)
      }

    })
      .catch(err => console.log(err))
  }

  function findMainFilms(e) {
    e.preventDefault()
    console.log('it`s saved')
  }

  function handleSmallMetr() {
    setToggleSmallMeter(!toggleSmallMeter)

  }
  // console.log(toggleSmallMeter)
  // console.log(localStorage.getItem('findList'))
  // console.log(localStorage.getItem('smallMeter'))

  // console.log(allFilms)

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
                className="page"
                findFilms={findAllFilms}
                handleSmallMetr={ handleSmallMetr }
                toggleSmallMeter={toggleSmallMeter}
              />}
              />
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
            pageLogin={changePageLogin}
            findFilms={findMainFilms}
            handleSmallMetr={ handleSmallMetr }
            toggleSmallMeter={toggleSmallMeter}
          />}
        />

        <Route path="/films" element={
          <Movies
            isLogged={isLogged}
            pageLogin={changePageLogin}
            findFilms={findAllFilms}
            handleSmallMetr={ handleSmallMetr }
            toggleSmallMeter={toggleSmallMeter}
          />}
        />

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
        succes={isSelectedImageTooltip}
        text={text}/>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
