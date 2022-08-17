import React, { useState, useEffect } from "react";
import './EditProfile.css';
import Header from '../Header/Header';

function EditProfile({ logOut, isLogged, pageLogin }) {
  const [inputValue, setInputValue] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  })
  const [isEdit, setIsEdit] = useState(true)
  const name = 'Виталий';


  function editProfile() {
    setIsEdit(false)
  }

  function ChangeValueinput(e) {
    const key = e.target.name
    setInputValue(prevState => ({ ...prevState, [key]: e.target.value }))
  }

  function submitEditProfile(e) {
    e.preventDefault();
    console.log('submit')
    setIsEdit(true)
  }

  return (
    <>
      <Header isLog={isLogged} pageLogin={pageLogin} />
      <section className="editProfile">
        <div className="editProfile__wrapper">
          <h1 className='editProfile__title'>{`Привет, ${name}!`}</h1>
          <form className="editProfile__form">
            <label className="editProfile__label editProfile__label_type_whith-line">
              Имя
              <input name='name' onChange={ChangeValueinput} disabled={isEdit} className="editProfile__input" value={inputValue.name}></input>
            </label>
            <label className="editProfile__label">
              E-mail
              <input name='email' onChange={ChangeValueinput} disabled={isEdit} className="editProfile__input" value={inputValue.email}></input>
            </label>
          </form>
          <div className='editProfile__buttons'>
            {isEdit ? <button className="editProfile__button" onClick={editProfile} >Редактировать</button>
              :
              <button type='submit' className="editProfile__button" onClick={submitEditProfile} >Сохранить</button>}

            <button className="editProfile__button editProfile__button_color_red" onClick={logOut}>Выйти из аккаунта</button>
          </div>
        </div>
      </section>
    </>

  )
}

export default EditProfile;