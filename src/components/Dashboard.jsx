import { Link, Outlet, useNavigate } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {

    const navigate = useNavigate();

  return (
    <div>
        <nav>
              <ul className="logout">
                  <li>Welcome Guest!</li>
                  <li><button onClick={() => navigate('/login')}>Logout</button></li>
            </ul>      
      </nav>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;