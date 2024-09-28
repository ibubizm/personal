import './burger.css'
import closeBtn from '../../images/krest.png'

export const BurgerMenu = ({
  projectRef,
  aboutRef,
  homeRef,
  active,
  toggleActive,
}) => {
  return (
    <div className={active ? 'burger active' : 'burger'}>
      <img
        className="burger__close"
        src={closeBtn}
        onClick={() => toggleActive(active)}
      />
      <ul className="burger__menu">
        <li
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Experience
        </li>
        <li className="burger__item">contacts</li>
        <li
          onClick={() =>
            projectRef.current.scrollIntoView({ behavior: 'smooth' })
          }
          className="burger__item"
        >
          my projects
        </li>
        <li className="burger__item">
          <a href="https://github.com/ibubizm?tab=repositories" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}
