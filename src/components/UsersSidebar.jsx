import { Link, Outlet } from "react-router-dom";

const UsersSidebar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{width: '200px', borderRight: '1px solid #ccc'}}>
              <ul style={{listStyle: 'none', marginLeft: '0', paddingLeft: '0', margin: '4px'}}>
                  <li style={{marginBottom: '10px'}}><Link to="/dashboard/users/add">Add Note</Link></li>
                  <li style={{ marginBottom: '10px' }}><Link to="/dashboard/users/edit">Edit User</Link></li>
                  <li style={{ marginBottom: '10px' }}><Link to="/dashboard/users/delete">Delete User</Link></li>
          </ul>
        </div>
          
          <div>
              <Outlet />
          </div>
    </div>
  )
}

export default UsersSidebar;