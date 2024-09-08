import { Slider } from '../slider/slider'
import './my_projects.css'

export const MyProjects = ({ myref }) => {
  return (
    <div ref={myref} className="projects">
      <h1 className="title">Projects</h1>
      <div className="corusel">
        <Slider />
      </div>
    </div>
  )
}
