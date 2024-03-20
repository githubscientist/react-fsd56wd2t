import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Login Successful!');

    navigate('/dashboard');
  }

  return (
    <div>
      <div style={{textAlign: 'center'}}><h1>Login</h1></div>
      <div>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px', margin: 'auto' }}
        onSubmit={handleLogin}
        >
          <input 
            type="email" 
            placeholder="Email..."
          />

          <input
            type="password"
            placeholder="Password..."
          />

          <button type="submit">Submit</button>
        </form>
        <p style={{textAlign: 'center'}}>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login;