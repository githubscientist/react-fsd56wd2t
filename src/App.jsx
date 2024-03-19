import { useState } from "react"
import Home from "./components/Home";
import Notes from "./components/Notes";
import Users from "./components/Users";

const App = () => {

  const [page, setPage] = useState('home');

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    borderBottom: '1px solid #ddd'
  }

  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'notes') {
      return <Notes />
    } else if (page === 'users') {
      return <Users />
    }
  }

  return (
    <div>
      <div style={navStyles}>
        <a href="#" onClick={() => setPage('home')}>home</a>
        <a href="#" onClick={() => setPage('notes')}>notes</a>
        <a href="#" onClick={() => setPage('users')}>users</a>
      </div>

      {
        content()
      }
    </div>
  )
}

export default App;