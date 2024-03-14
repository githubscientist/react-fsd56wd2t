const Display = ({ count }) => {

    console.log('Display component rendering...', count)

  return (
    <p>Count: { count }</p>
  )
}

export default Display;