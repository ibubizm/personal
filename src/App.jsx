import { useRef, useState } from 'react'
import './App.css'
import { Main } from './components/main/main'
import { MyProjects } from './components/my_projects/my_projects'
import { Nav } from './components/nav/nav'
import { About } from './components/about/about'
import { Footer } from './components/footer/footer'
import { BurgerMenu } from './components/burger/burger'

function App() {
  const projectRef = useRef(null)
  const aboutRef = useRef(null)
  const homeRef = useRef(null)

  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div className="App">
      <div className="container">
        <section className="page">
          <Nav
            projectRef={projectRef}
            aboutRef={aboutRef}
            active={active}
            toggleActive={toggleActive}
          />
          <BurgerMenu
            projectRef={projectRef}
            aboutRef={aboutRef}
            homeRef={homeRef}
            active={active}
            toggleActive={toggleActive}
          />
          <Main homeRef={homeRef} />
        </section>
        <section className="page">
          <About aboutRef={aboutRef} />
        </section>
        <section className="page projects__page">
          <MyProjects myref={projectRef} />
        </section>
        <Footer homeRef={homeRef} projectRef={projectRef} aboutRef={aboutRef} />
      </div>
    </div>
  )
}

export default App
