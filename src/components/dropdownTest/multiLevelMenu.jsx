import { MenuItem } from './menuItem'

export const MultiMenu = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <MenuItem index={index} item={item} />
      ))}
    </div>
  )
}
