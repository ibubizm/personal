import { useState } from 'react'

export const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div>
      <div  style={{
          cursor: item.subMenu ? "pointer" : "default",
          padding: "5px 10px",
          background: isOpen ? "#f0f0f0" : "#fff",
        }} onClick={toggleMenu}>{item.title}</div>
      {item.subMenu && isOpen && (
        <div>
          {item.subMenu.map((i, index) => (
            <MenuItem key={index + 2} item={i} />
          ))}
        </div>
      )}
    </div>
  )
}

