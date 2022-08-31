import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from '../Main/Main'
import Login from "../Login/Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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

  function displayInfo(imageBool, displayBool, message) {
    setIsSelectedImageTooltip(imageBool)
    setIsSelectedInfoTooltip(displayBool)
    setText(message)
  }


  useEffect(_ => {
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
              let filmWithOwner = res.filter(el => el.owner === user._id
              )
              if(!filmWithOwner){

              }else{
                localStorage.setItem('savedMoviesList', JSON.stringify(filmWithOwner))
              }
              setTestRender(testRender+1)
              setIsLogged(true)
              setCurrentUser(user)
            })
            .catch(err => {
              displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.')

            })
            .finally(() => {
              setPreloader(false)

            })
        })
        .catch((err) => displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.'))
        .finally(() => {
          setPreloader(false)

        })
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
        displayInfo(true, true, 'Вы успешно зарегистрировались!')
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
            displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.')
          })
      })
      .catch(err => {
        console.log(err)
        displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.')
      })
      .finally(() => setPreloader(false))
  }

  function submitRegisterForm(data, nameForm) {
    setPreloader(true)
    nameForm === 'signup' ?
      register(data)
      .then(res => logIn(data))
      .catch(err => {
        console.log(err)
        displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.')
      }).finally(() => setPreloader(false))
      : logIn(data)
  }

  function closeAllPopups() {
    setIsSelectedInfoTooltip(false)
  }

  function updateUser(data) {
    if(currUser.name === data.name && currUser.email === data.email){
      displayInfo(false, true, 'Нужно изменить хотя бы одно поле.')
      return
    }
    setPreloader(true)
    if(data.name === currUser.name){
      const user = {
        name: currUser.name,
        email: data.email,}
      patchUser(user)
        .then(res => {
          setCurrentUser(res)
          displayInfo(true, true, 'Профиль успешно изменен!')
        })
        .catch(err => displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.'))
        .finally(() => setPreloader(false))
    }
    if(data.email === currUser.email){
      setPreloader(true)
      patchUser(
        {
        email: currUser.email,
        name: data.name
        })
        .then(res => {
          setCurrentUser(res)
          displayInfo(true, true, 'Профиль успешно изменен!')
        })
        .catch(err => displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.'))
        .finally(() => setPreloader(false))

    }
    if(data.email !== currUser.email && data.name !== currUser.name){
    setPreloader(true)
      patchUser(data)
        .then(res => {
          setCurrentUser(res)
          displayInfo(true, true, 'Профиль успешно изменен!')
        })
        .catch(err => displayInfo(false, true, 'Что-то пошло не так! Попробуйте ещё раз.'))
        .finally(() => setPreloader(false))
    }
  }




  function getFindList(filmsList, val) {

    let list = filmsList.filter(el => el.nameRU.toLowerCase().includes(val))
    if( list.length === 0 ){
      displayInfo(false, true, 'Ничего не найдено.')
      return null
    }
    const IsSmallMeter = localStorage.getItem('smallMeter')
    if(IsSmallMeter === 'false' || IsSmallMeter === null){
      localStorage.setItem('findList', JSON.stringify(list))
      localStorage.setItem('valInput', val)
      // localStorage.setItem('numberOfMoviesDisplayed', '0')
      setReactionsOnSearch(!reactionsOnSearch)

    }else{
      list = list.filter(el => el.duration < 40)
      localStorage.setItem('findList', JSON.stringify(list))
      localStorage.setItem('valInput', val)
      // localStorage.setItem('numberOfMoviesDisplayed', '0')
      setReactionsOnSearch(!reactionsOnSearch)
    }
    refresh()
    setReactionsOnSearch(!reactionsOnSearch)

  }


  function findAllFilms(e, val) {
    e.preventDefault()
    if(!val){
      setPreloader(false)
      setIsSelectedImageTooltip(false)
      setIsSelectedInfoTooltip(true)
      setText('Введите значение.')
      displayInfo(false, true, 'Введите значение.')
      return null
    }
    val = val.toLowerCase()
    const findListInLocalStorage = JSON.parse(localStorage.getItem('allFilmsFromApi')) ? JSON.parse(localStorage.getItem('allFilmsFromApi')) : false
    if(findListInLocalStorage?.length){
      setPreloader(true)
      console.log('it`s seconds requests')
      getFindList(findListInLocalStorage, val)
      setPreloader(false)
    }else{
      setPreloader(true)
      api.getCards().then(res => {
        localStorage.setItem('allFilmsFromApi', JSON.stringify(res))
        getFindList(res, val)
      })
        .catch(err => {
          displayInfo(false, true, 'Во время запроса произошла ошибка.')
        })
        .finally(() => setPreloader(false))
    }

  }

  function findMainFilms(e, val) {
    e.preventDefault()
    val = val.toLowerCase()
    localStorage.setItem('valInputSavedFilms', val)
    const saveFilms = JSON.parse(localStorage.getItem('savedMoviesList'))

    const IsSmallMeter = localStorage.getItem('smallMeter')
    let list = saveFilms.filter(el => el.nameRU.toLowerCase().includes(val))
    if(IsSmallMeter === 'false' || IsSmallMeter === null){
      localStorage.setItem('SavedFilmlistMatchInput', JSON.stringify(list))
      setReactionsOnSearch(!reactionsOnSearch)
    }else{
      list = saveFilms.filter(el => el.duration < 40)
      localStorage.setItem('SavedFilmlistMatchInput', JSON.stringify(list))
      setReactionsOnSearch(!reactionsOnSearch)
    }
    if( saveFilms.length === 0  || list.length===0){
      displayInfo(false, true, 'Ничего не найдено.')
      return null
    }
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
    deleteMovie(cardId)
      .then(res => {
        const listBeforeDelete = JSON.parse(localStorage.getItem('savedMoviesList'))
        const listWithDelete = listBeforeDelete.filter(el => el._id !== cardId)
        localStorage.setItem('savedMoviesList', JSON.stringify(listWithDelete))
        setTestRender(testRender+1)
      })
      .catch(err => console.log(err))
      .finally(() => setPreloader(false))
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
                  submitRegisterForm={submitRegisterForm}
                  preloader={preloader}
                />
              } />
            <Route
              path="/signin"
              element={
                <Login
                  isLogged={isLogged}
                  pageLogin={changePageLogin}
                  submitRegisterForm={submitRegisterForm}
                  preloader={preloader}
                />
              } />

            <Route path="/" element={
              <Main
                isLogged={isLogged}
                pageLogin={changePageLogin}
                className="page" />} />

            <Route path="/saveFilms" element={
              <ProtectedRoute isLogged={isLogged}>
                <SavedMovies
                  isLogged={isLogged}
                  pageLogin={changePageLogin}
                  findFilms={findMainFilms}
                  handleSmallMetr={ handleSmallMetr }
                  toggleSmallMeter={toggleSmallMeter}
                  testRender={testRender}
                  deleteCard={deleteCard}
                  preloader={preloader}
                  refresh={refresh}
                />
              </ProtectedRoute>
                }
            />

              <Route path="/films" element={
                <ProtectedRoute isLogged={isLogged}>
                  <Movies
                    isLogged={isLogged}
                    pageLogin={changePageLogin}
                    findFilms={findAllFilms}
                    handleSmallMetr={handleSmallMetr}
                    toggleSmallMeter={toggleSmallMeter}
                    postLike={postLike}
                    deleteCard={deleteCard}
                    preloader={preloader}
                    refresh={refresh}
                  />
                </ProtectedRoute>
              }
              />
            <Route path="/editProfile" element={
              <ProtectedRoute isLogged={isLogged}>
                <EditProfile
                  isLogged={isLogged}
                  pageLogin={changePageLogin}
                  logOut={logOut}
                  updateUser={updateUser}
                  preloader={preloader}
                />
              </ProtectedRoute>
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <InfoTooltip
            onClose={closeAllPopups}
            isOpen={isSelectedInfoTooltip}
            success={isSelectedImageTooltip}
            text={text}/>
        </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
