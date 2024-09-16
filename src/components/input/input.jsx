import './input.css'
import tg from '../../images/Oval.svg'

export const Input = ({ children, func, ...props }) => {
  return (
    <div className="input__block">
      <input className="input" placeholder="Send me a message" {...props} />
      <button className="tg__btn">
        <img className="tg__btn__img" src={tg} alt="" />
      </button>
    </div>
  )
}
