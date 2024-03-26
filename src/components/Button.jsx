import './Button.css';

const Button = ({ value, onClick }) => {
  return (
      <button className='square' onClick={onClick}>{ value }</button>
  )
}

export default Button;