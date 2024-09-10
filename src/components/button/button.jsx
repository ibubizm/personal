import './button.css'

export const Button = ({ children, func, ...props }) => {
  return (
    <button className="button" onClick={func} {...props}>
      {children}
    </button>
  )
}
