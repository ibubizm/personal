import { MenuItems } from './navbarmenu'

export const DropDown = ({ submenus, dropdown, depthlevel }) => {
  depthlevel = depthlevel + 1
  const dropdownClass = depthlevel > 1 ? 'dropdown-submenu' : ''

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthlevel={depthlevel} />
      ))}
    </ul>
  )
}
