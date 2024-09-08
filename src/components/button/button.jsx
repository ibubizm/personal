import './button.css'

export const Button = ({ children, func }) => {
  return (
    <button className="button" onClick={func}>
      {children}
    </button>
  )
}
