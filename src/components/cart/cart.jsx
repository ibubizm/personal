import './cart.css'

export const Cart = ({ children, img, link, index }) => {
  return (
    // <a href={link} target="_blank">
    <div className="cart">
      <img className="image" src={img} alt="" />
      <div className="overlay">
        <div className="overlay__text">{children}</div>
      </div>
    </div>
    // </a>
  )
}
