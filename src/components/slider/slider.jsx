import { Cart } from '../cart/cart'
import './slider.css'
import { list } from '../cart/list'
import { cloneElement } from 'react'

export const Slider = () => {
  const children = cloneElement(
    <div className="slide">
      {list.map((m) => (
        <Cart img={m.img}>{m.description}</Cart>
      ))}
    </div>
  )

  return (
    <div className="slide-track">
      {children}
      {children}
    </div>
  )
}
