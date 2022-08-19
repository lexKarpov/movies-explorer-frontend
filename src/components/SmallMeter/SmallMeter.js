import './SmallMeter.css'

function SmallMeter({ handleSmallMetr, checked }) {
  return (
    <div className='formSearch__toggle'>
      <button className={`formSearch__check ${checked ? 'checked' : ''}`} type="button" onClick={handleSmallMetr}>
      </button>
      <p className="formSearch__description-check">Короткометражки</p>
    </div>
  )
}

export default SmallMeter