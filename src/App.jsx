import { useRef } from 'react'
import './App.css'
import { Main } from './components/main/main'
import { MyProjects } from './components/my_projects/my_projects'
import { Nav } from './components/nav/nav'
import { About } from './components/about/about'
import { Footer } from './components/footer/footer'

function App() {
  const projectRef = useRef(null)
  const aboutRef = useRef(null)
  const homeRef = useRef(null)

  return (
    <section className="App">
      <div className="container">
        <div className="page">
          <Nav projectRef={projectRef} aboutRef={aboutRef} />
          <Main homeRef={homeRef} />
        </div>
        <div className="page">
          <About aboutRef={aboutRef} />
        </div>
        <div className="page projects__page">
          <MyProjects myref={projectRef} />
          <Footer
            homeRef={homeRef}
            projectRef={projectRef}
            aboutRef={aboutRef}
          />
        </div>
      </div>
    </section>
  )
}

export default App
