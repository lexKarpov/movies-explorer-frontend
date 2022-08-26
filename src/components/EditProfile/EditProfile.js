import React, { useState, useEffect, useContext } from "react";
import './EditProfile.css';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext'
import Preloader from "../Preloader/Preloader";


function EditProfile({ logOut, isLogged, pageLogin, updateUser, preloader }) {
  const user = useContext(CurrentUserContext)
  const beforeValueOfInputs = {
    name: user? user.name : '',
    email: user? user.email : '',}

  const [inputValue, setInputValue] = useState({
    name: user? user.name : '',
    email: user? user.email : '',
  })
  const [isEdit, setIsEdit] = useState(true)

  function editProfile() {
    setIsEdit(false)
  }

  function ChangeValueinput(e) {
    const key = e.target.name
    setInputValue(prevState => ({ ...prevState, [key]: e.target.value }))
  }

  function submitEditProfile(e) {
    e.preventDefault();
    updateUser(inputValue, beforeValueOfInputs)
    setIsEdit(true)
  }

  return (
    <div className="editProfile__container">
      {
        preloader ?
          <Preloader/>
          :
          <>
            <Header isLog={isLogged} pageLogin={pageLogin} />
            <main>
              <section className="editProfile">
                <div className="editProfile__wrapper">
                  <h1 className='editProfile__title'>{`Привет, ${user?.name}!`}</h1>
                  <form className="editProfile__form" onSubmit={submitEditProfile}>
                    <label className="editProfile__label editProfile__label_type_whith-line">
                      Имя
                      <input name='name' onChange={ChangeValueinput} disabled={isEdit} className="editProfile__input" value={inputValue.name}/>
                    </label>
                    <label className="editProfile__label">
                      E-mail
                      <input name='email' onChange={ChangeValueinput} disabled={isEdit} className="editProfile__input" value={inputValue.email}/>
                    </label>
                    <div className='editProfile__buttons'>
                      {isEdit ? null
                        :
                        <button type='submit' className="editProfile__button">Сохранить</button>}
                    </div>
                  </form>
                  {isEdit ? <button type="button" className="editProfile__button editProfile__button_type_edit" onClick={editProfile} >Редактировать</button>
                    : null
                  }
                  <button type="button" className="editProfile__button editProfile__button_color_red" onClick={logOut}>Выйти из аккаунта</button>
                </div>
              </section>
            </main>
          </>
      }

    </div>

  )
}

export default EditProfile;
