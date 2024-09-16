import './button.css'

export const Button = ({ children, className, func, ...props }) => {
  return (
    <button className={`button ${className}`} onClick={func} {...props}>
      {children}
    </button>
  )
}
