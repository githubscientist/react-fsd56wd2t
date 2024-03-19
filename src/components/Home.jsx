import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const navStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    borderBottom: '1px solid #ddd'
  }

  return (
    <div>
      <div style={navStyles}>
        <Link to="/">home</Link>
        <Link to="/notes">notes</Link>
        <Link to="/users">users</Link>
      </div>
      
      <div>
        <i>Notes Application, Guvi-2024 &copy; All rights reserved</i>
      </div>
    </div>
  )
}

export default Home;