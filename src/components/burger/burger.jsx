import './burger.css'
import closeBtn from '../../images/krest.png'

export const BurgerMenu = ({ active, toggleActive }) => {
  return (
    <div className={active ? 'burger active' : 'burger'}>
      <img
        className="burger__close"
        src={closeBtn}
        onClick={() => toggleActive(active)}
      />
      <ul className="burger__menu">
        <li className="burger__item">expirience</li>
        <li className="burger__item">contacts</li>
        <li className="burger__item">my projects</li>
        <li className="burger__item">gitHub</li>
      </ul>
    </div>
  )
}
