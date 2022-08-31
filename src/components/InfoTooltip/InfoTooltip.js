import React from 'react'
import fail from "../../images/infoTooltip/fail.png"
import ok from "../../images/infoTooltip/success.png"
import './InfoTooltip.css'

export default function InfoTooltip({success, isOpen, onClose, text}) {
  return (
    <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window-wrap popup_type_info-tool">
        <img
          src={success ? ok : fail}
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
