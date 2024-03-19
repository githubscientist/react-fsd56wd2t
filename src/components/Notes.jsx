import React from 'react';
import { Outlet } from 'react-router-dom';

const Notes = () => {
  return (
      <div>
        <h1>Notes</h1>
      <div style={{ display: "flex"}}>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/notes/all">All</a>
              </li>
              <li>
                <a href="/notes/create">New Note</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div style={{ marginLeft: "75px", borderLeft: "1px solid black", paddingLeft: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Notes;