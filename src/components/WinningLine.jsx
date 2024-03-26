import './WinningLine.css';

const WinningLine = ({ winningLine }) => {

    const { angle, length, position } = winningLine;

    const style = {
        width: `${length}px`,
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: `rotate(${angle}deg)`
    }

  return (
    <div className="winnerLine" style={style}></div>
  )
}

export default WinningLine;