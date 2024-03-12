const Note = ({ note }) => {

  return (
      <li>{ note.important ? note.content + '★' : note.content }</li>
  )
}

export default Note;