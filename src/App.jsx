import { useRef } from 'react'
import './App.css'
import { Main } from './components/main/main'
import { MyProjects } from './components/my_projects/my_projects'
import { Nav } from './components/nav/nav'
import { About } from './components/about/about'

function App() {
  const projectRef = useRef(null)
  const aboutRef = useRef(null)

  return (
    <div className="App">
      <div className="container">
        <div className="page">
          <Nav projectRef={projectRef} aboutRef={aboutRef} />
          <Main />
        </div>
        <div className="page">
          <About aboutRef={aboutRef} />
        </div>
        <div className="page">
          <MyProjects myref={projectRef} />
        </div>
      </div>
    </div>
  )
}

export default App
