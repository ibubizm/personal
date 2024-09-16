import './footer.css'
import tg from '../../images/tg3.png'
import whatsapp from '../../images/wa.png'
import linkedIn from '../../images/link.png'
import { Input } from '../input/input'

export const Footer = ({ homeRef, projectRef, aboutRef }) => {
  return (
    <nav className="footer">
      <div className="input__block">
        <span>Hiring?</span>
        <div className="div">
          <Input />
        </div>
      </div>
      <ul className="footer__social">
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
      <ul className="footer__links">
        <li
          onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          Home
        </li>
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
    </nav>
  )
}
