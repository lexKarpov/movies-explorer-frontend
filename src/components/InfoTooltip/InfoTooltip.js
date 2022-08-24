import React from 'react'
import fail from "../../images/infoTooltip/fail.png"
import success from "../../images/infoTooltip/success.png"
import './InfoTooltip.css'

export default function InfoTooltip({succes, isOpen, onClose, text}) {
  const goodResp = 'Вы успешно зарегистрировались!'
  const badResp = 'Что-то пошло не так! Попробуйте ещё раз.'
  return (
    <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window-wrap popup_type_info-tool">
        <img
          src={success ? success : fail}
          alt= 'подтверждение входа'
          className="popup__image-tool"/>
        <h3 className="popup__message">{text}</h3>
        <button
          type="button"
          className="popup__button-close popup__button-close_type_image"
          onClick={onClose}/>
      </div>
    </div>
  )
}
