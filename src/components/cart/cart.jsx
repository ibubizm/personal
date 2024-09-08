import './cart.css'

export const Cart = ({ children, img }) => {
  return (
    <div className="cart">
      <img className="image" src={img} alt="" />
      <div className="overlay">
        <div className="overlay__text">{children}</div>
      </div>
    </div>
  )
}
