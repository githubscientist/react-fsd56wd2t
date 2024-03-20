const AddNote = () => {
  return (
      <div style={{marginLeft: '20px'}}>
          <form style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <input type="text" placeholder="Title" />
              <textarea placeholder="Content"></textarea>
                <button>Add Note</button>
          </form>
    </div>
  )
}

export default AddNote;