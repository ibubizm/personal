import { menuItems } from '../menuItems'

export const MenuItems = () => {
  return (
    <nav>
      <ul className="menus">
        {MenuItems.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}
