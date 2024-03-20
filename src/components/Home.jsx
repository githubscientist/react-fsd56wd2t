import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const homeStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '50px',
    }

  return (
    <div style={homeStyles}>
        <div className="description">
            <h1>Notes App</h1>
            <p>Welcome to the notes app! Here you can create, edit, and delete notes. To get started, click on the register button to create an account or login if you already have one.</p>
        </div>
          
        <div className="authForms">
              <div>
                  <button
                      style={{ width: '200px' }}
                      onClick={() => {
                        //   window.location.href = '/register';
                          navigate('/register');
                      }}
                  >
                    Register
                  </button>
              </div>
                <div style={{textAlign: 'center'}}>
                  <p>or</p>
                </div>
              <div>
                  <button
                      style={{ width: '200px' }}
                      onClick={() => {
                          navigate('/login');
                      }}
                  >Login</button>
              </div>
      </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;