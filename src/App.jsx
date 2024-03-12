const App = (props) => {

  console.log(props.notes);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <li>{props.notes[0].content}</li>
        <li>{props.notes[1].content}</li>
        <li>{props.notes[2].content}</li>
      </ul>
    </div>
  )
}

export default App;