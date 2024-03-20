import { Outlet } from "react-router-dom";

const Home = () => {

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
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;