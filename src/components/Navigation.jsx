import { Link, Outlet } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <div>
        <nav className='navigation'>
          <ul>
            <li><Link to={'/dashboard'}>Stats</Link></li>
            <li><Link to={'/dashboard/users'}>Users</Link></li>
            <li><Link to={'/dashboard/notes'}>Notes</Link></li>
          </ul>
        </nav>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Navigation;