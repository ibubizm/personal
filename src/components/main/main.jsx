import i from './i2.png'
import './main.css'
import { Button } from '../button/button'

export const Main = ({ homeRef }) => {
  return (
    <div ref={homeRef} className="main">
      <div className="main__content">
        {/* <img src="" alt="" /> */}
        <img className="photo" src={i} alt="" />

        <div className="description">
          {/* <div className="sub__title">Web developer</div> */}
          <h1 className="title main__title">Gleb Tkachuk</h1>
          <p className="description__row first">Hi, I’m a frontend developer</p>
          <p className="description__row second">from Belarus.</p>
          <p className="description__row third">I work with :</p>
          <p className="description__row fourth">JS, React, Node JS, Figma</p>
          <p className="description__row fifth">
            MongoDB, TS, Postgresql, Redux
          </p>
          <Button className={'button__resume'}>
            <a
              href="./hleb_tkachuk_cv.pdf"
              type="application/octet-stream"
              download="hleb_tkachuk_cv.pdf"
            >
              resume
            </a>
          </Button>
          {/* <span className="elipce"></span> */}
        </div>
      </div>
    </div>
  )
}
