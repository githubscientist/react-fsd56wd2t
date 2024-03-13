import User from "./components/User";

const App = () => {

  const isLoggedIn = false;

  return (
    <div>
      {
        isLoggedIn ? <User message="Welcome, User!" buttonLabel="Logout" /> : <User message="Please, Login!" buttonLabel="Login" />
      }
    </div>
  )
}

export default App;