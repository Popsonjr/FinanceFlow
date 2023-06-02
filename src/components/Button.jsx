
const Button = ({ buttonStyles, buttonText }) => {
  return (
    <button type="button" className={`${buttonStyles} uppercase rounded-[80px] px-[32px]`}>
      {buttonText ? buttonText : "download app"}
    </button>
  )
}

export default Button