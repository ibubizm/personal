import i from './i2.png'
import './main.css'
import { Button } from '../button/button'

export const Main = () => {
  return (
    <div className="main">
      <div className="main__content">
        {/* <img src="" alt="" /> */}
        <img className="photo" src={i} alt="" />

        <div className="description">
          {/* <div className="sub__title">Web developer</div> */}
          <h1 className="title main__title">Hleb Tkachuk</h1>
          <p className="description__row first">
            Hi, I’m a frontend developer from Belarus.
          </p>
          <p className="description__row second">
            I work with
            {/* I recently moved to Israel to start */}
          </p>
          <p className="description__row third">
            {/* a new chapter in my life. */}
            JS, React, Node JS, Figma, MongoDB, TS, Postgresql, Redux ...
          </p>
          <Button>
            <a
              href="./hleb_tkachuk_cv.pdf"
              type="application/octet-stream"
              download="hleb_tkachuk_cv.pdf"
            >
              resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
