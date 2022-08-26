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
import {register, authorize, getUserContent, patchUser, postFilm, getSavedFilms, deleteMovie} from '../../utils/MainApi'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Preloader from "../Preloader/Preloader";

function App() {
  let navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(false)
  const [currUser, setCurrentUser] = useState({})
  const [isSelectedInfoTooltip, setIsSelectedInfoTooltip] = useState(false)
  const [isSelectedImageTooltip, setIsSelectedImageTooltip] = useState(false)
  const [toggleSmallMeter, setToggleSmallMeter] = useState(false)
  const [reactionsOnSearch, setReactionsOnSearch] = useState(false)
  const [research, setReSearch] = useState(false)
  const [testRender, setTestRender] = useState(1)
  const [text, setText] = useState('')
  const [preloader, setPreloader] = useState(false)

  useEffect(_ => {
    setPreloader(true)
    // api.getCards().then(res => setAllFilms(res)) // get all films in const allFilms
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      getUserContent(jwt)
        .then(res => {
          if (res) {

            return res
          }
        })
        .then(user => {
          getSavedFilms()
            .then(res => {
              // setSavedMovies(res)

              let filmWithOwner = res.filter(el => el.owner === user._id
              )
              if(!filmWithOwner){
                // localStorage.setItem('savedMoviesList', '')
              }else{
                localStorage.setItem('savedMoviesList', JSON.stringify(filmWithOwner))
              }
              setTestRender(testRender+1)
              setIsLogged(true)
              setCurrentUser(user)
            })
            .catch(err => console.log(err))
        })
        .catch((err) => console.log(err))
        .finally(() => setPreloader(false))
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
    setPreloader(true)
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
              navigate('/films')
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
      .finally(() => setPreloader(false))
  }

  function submitRegisterForm(e, data, nameForm) {
    setPreloader(true)
    e.preventDefault()
    nameForm === 'signup' ?
      register(data)
      .then(res => logIn(data))
      .catch(err => {
        console.log(err)
        setIsSelectedImageTooltip(false)
        setIsSelectedInfoTooltip(false)
      }).finally(() => setPreloader(false))
      : logIn(data)
  }

  function closeAllPopups() {
    setIsSelectedInfoTooltip(false)
  }

  function updateUser(data, beforeValueOfInputs) {
    // console.log(data.name)
    setPreloader(true)
    if(data.name === beforeValueOfInputs.name){
      const user = {
        name: beforeValueOfInputs.name,
        email: data.email,}
      patchUser(user)
        .then(res => setCurrentUser(res))
        .catch(err => console.log(err))
        .finally(() => setPreloader(false))
    }
    if(data.email === beforeValueOfInputs.email){
      setPreloader(true)
      patchUser(
        {
        email: beforeValueOfInputs.email,
        name: data.name
        })
        .then(res => setCurrentUser(res))
        .catch(err => console.log(err))
        .finally(() => setPreloader(false))
    }
    if(data.email !== beforeValueOfInputs.email && data.name !== beforeValueOfInputs.name){
    setPreloader(true)
      patchUser(data)
        .then(res => setCurrentUser(res))
        .catch(err => console.log(err))
        .finally(() => setPreloader(false))
    }
  }

  function findAllFilms(e, val) {
    setPreloader(true)
    e.preventDefault()
    if(!val){
      console.log('novalue')
      return null
    }
    val = val.toLowerCase()
    api.getCards().then(res => {
    let list = res.filter(el => el.nameRU.toLowerCase().includes(val))
      if( list.length === 0 ){
        // setNoResult(true)
        setIsSelectedImageTooltip(false)
        setIsSelectedInfoTooltip(true)
        setText('Ничего не найдено.')
        console.log('this it')
        return null
      }

      const IsSmallMeter = localStorage.getItem('smallMeter')
      // const formattedFilmsList = list.map(el => {el.})
      if(IsSmallMeter === 'false'){
        localStorage.setItem('findList', JSON.stringify(list))
        // localStorage.setItem('smallMeter', toggleSmallMeter.toString())
        localStorage.setItem('valInput', val)
        localStorage.setItem('numberOfMoviesDisplayed', '0')
        setReactionsOnSearch(!reactionsOnSearch)
      }else{
        list = list.filter(el => el.duration < 40)
        localStorage.setItem('findList', JSON.stringify(list))
        // localStorage.setItem('smallMeter', toggleSmallMeter.toString())
        localStorage.setItem('valInput', val)
        localStorage.setItem('numberOfMoviesDisplayed', '0')
        setReactionsOnSearch(!reactionsOnSearch)
      }
      refresh()
    })
      .catch(err => console.log(err))
      .finally(() => setPreloader(false))
  }

  function findMainFilms(e) {
    e.preventDefault()
    console.log('it`s saved')
  }

  function handleSmallMetr() {
    setToggleSmallMeter(!toggleSmallMeter)
    return toggleSmallMeter
  }

  function refresh() {
    setReSearch(!research)
  }

  function postLike(id) {
    setPreloader(true)
    const targetFilm = JSON.parse(localStorage.getItem('findList')).filter(el => el.id === id)[0]
    postFilm(targetFilm).then(res => {
      getSavedFilms()
        .then(res => {
          let filmWithOwner = res.filter(el => el.owner === currUser._id)
          if(!filmWithOwner){
          }else{
            localStorage.setItem('savedMoviesList', JSON.stringify(filmWithOwner))
          }
          setTestRender(testRender+1)
        })
        .catch(err => console.log(err))
        .finally(() => setPreloader(false))
    })
  }

  function deleteCard(cardId) {
    setPreloader(true)
    console.log('cardId')
    console.log(cardId)
    deleteMovie(cardId)
      .then(res => {
        const listBeforeDelete = JSON.parse(localStorage.getItem('savedMoviesList'))
        const listWithDelete = listBeforeDelete.filter(el => el._id !== cardId)
        console.log('listWithDelete')
        console.log(listWithDelete)
        localStorage.setItem('savedMoviesList', JSON.stringify(listWithDelete))
        setTestRender(testRender+1)
      })
      .catch(err => console.log(err))
      .finally(() => setPreloader(false))
  }



  return (
    <CurrentUserContext.Provider value = {currUser}>
      {preloader ? <Preloader/>
      :
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
            <Route path="/" element={
              <Main
                isLogged={isLogged}
                pageLogin={changePageLogin}
                className="page" />} />

            <Route path="/saveFilms" element={
              <SavedMovies
                isLogged={isLogged}
                pageLogin={changePageLogin}
                findFilms={findMainFilms}
                handleSmallMetr={ handleSmallMetr }
                toggleSmallMeter={toggleSmallMeter}
                testRender={testRender}
                deleteCard={deleteCard}
              />}
            />

            <Route path="/films" element={
              <Movies
                isLogged={isLogged}
                pageLogin={changePageLogin}
                findFilms={findAllFilms}
                handleSmallMetr={ handleSmallMetr }
                toggleSmallMeter={toggleSmallMeter}
                postLike = {postLike}
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
      }


    </CurrentUserContext.Provider>
  );
}

export default App;
