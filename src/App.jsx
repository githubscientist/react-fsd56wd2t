const App = () => {

  const isLoggedIn = true;

  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <p>Welcome, User! <button>Logout</button></p>
          </div>
        ) : (
            <div>
              <p>Please login <button>Login</button></p>
            </div>
        )
      }
    </div>
  )
}

export default App;