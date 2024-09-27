import { Cart } from '../cart/cart'
import './slider2.css'
import { list } from '../cart/list'
import { useState, Children, useRef, useEffect } from 'react'

export const Slider = () => {
  const ref = useRef(null)
  const [active, setActive] = useState(3)

  const nextSlide = () => {
    setActive((prev) => (prev === list.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    console.log(ref.current.offsetWidth)
  }, [])

  return (
    <div ref={ref} className="slides">
      <button>left</button>
      {list.map((m, index) => (
        <Cart link={m.link} img={m.img} key={m.link} index={index}>
          {m.description}
        </Cart>
      ))}
      <button onClick={nextSlide}>right</button>
    </div>
  )
}
