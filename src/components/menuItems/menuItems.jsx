import { useState, useEffect, useRef } from 'react'
import { Dropdown } from './dropdown'

export const MenuItems = ({ item, depthlevel }) => {
  const [dropdown, setDropdown] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
      document.addEventListener('mousedown', handler)
      document.addEventListener('touchstart', handler)

      return () => {
        document.removeEventListener('mousedown', handler)
        document.removeEventListener('touchstart', handler)
      }
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
        {MenuItems.submenu ? (
            <>
            <button aria-expanded={dropdown ? 'true' : 'false'} aria-haspopup='menu' onClick={setDropdown((prev) => !prev)}>
               {items.title} </button>)
                
            </> : (
                <a href="/#">{items.title}</a>
            )
        }
    </li>
  )
}
