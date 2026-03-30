const Button = ({text, onClick}) => {
  return (
    <div>
      <button type="button" onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button