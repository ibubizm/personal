import { Slider } from '../slider/slider'
import './my_projects.css'
import { list } from '../cart/list'
import { Cart } from '../cart/cart'

export const MyProjects = ({ myref }) => {
  return (
    <div ref={myref} className="projects">
      <h1 className="title">Projects</h1>
      <div className="projects__list">
        {list.map((item) => (
          <Cart link={item.link} img={item.img}>
            {item.description}
          </Cart>
        ))}
      </div>
      {/* <div className="corusel">
        <Slider />
      </div> */}
    </div>
  )
}
