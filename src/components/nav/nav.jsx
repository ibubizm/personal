import './nav.css'
import tg from './tg3.png'
import whatsapp from './wa.png'
import linkedIn from './link.png'

export const Nav = ({ projectRef, aboutRef }) => {
  return (
    <nav className="navigation">
      <ul>
        <li
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Experience
        </li>
        <li
          onClick={() =>
            projectRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          My projects
        </li>
        <li>
          <a href="https://github.com/ibubizm?tab=repositories" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/hleb-tkachuk-697218222/"
            target="_blank"
          >
            <img className="socialmedia" src={linkedIn} alt="" />
          </a>
        </li>
        <li>
          <a href="https://t.me/ibubizm">
            <img className="socialmedia" src={tg} alt="" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/972545246779">
            <img className="socialmedia" src={whatsapp} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
