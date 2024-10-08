import { useEffect } from 'react'
import './about.css'
import gus from './image.png'
import useOnScreen from '../../hooks/useViewport'

export const About = ({ aboutRef }) => {
  const about__list__item = document.getElementsByClassName('about__list__item')

  const faidIn = (item, delay) => {
    setTimeout(() => {
      item.classList.add('show')
    }, delay)
  }

  const isVisible = useOnScreen(aboutRef)

  useEffect(() => {
    if (isVisible) {
      for (let index = 0; index < about__list__item.length; index++) {
        faidIn(about__list__item[index], index * 500)
      }
    }
  }, [isVisible])

  return (
    <div ref={aboutRef} className="about">
      <h1 className="title">Experience</h1>

      <div className="about__content">
        <ul className={'about__list'}>
          <li className="about__list__item">
            I developed and maintained both frontend and backend components of
            mobile applications, including creating user interfaces and
            implementing server-side logic.
          </li>
          <li className="about__list__item">
            Handled the layout and design of both desktop and mobile versions of
            applications, ensuring responsive and user-friendly experiences
            across different devices.
          </li>
          <li className="about__list__item">
            Integrated various APIs to extend application functionality and
            facilitate interaction with external services.
          </li>
          <li className="about__list__item">
            Proposed and implemented improvements to application architecture
            and code optimization, resulting in enhanced performance and reduced
            development time.
          </li>
        </ul>
        <img className="gus" src={gus} alt="" />
      </div>
    </div>
  )
}
