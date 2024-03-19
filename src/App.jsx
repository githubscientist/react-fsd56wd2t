import Home from "./components/Home";
import Notes from "./components/Notes";
import Users from "./components/Users";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    borderBottom: '1px solid #ddd'
  }

  return (
    <Router>
      <div style={navStyles}>
        <Link to="/">home</Link>
        <Link to="/notes">notes</Link>
        <Link to="/users">users</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/users" element={<Users />} />
      </Routes>

      <div>
        <i>Notes Application, Guvi-2024 &copy; All rights reserved</i>
      </div>
    </Router>
  )
}

export default App;