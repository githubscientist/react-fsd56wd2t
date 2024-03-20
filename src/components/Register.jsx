import { Link, NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div style={{textAlign: 'center'}}><h1>Register</h1></div>
      <div>
        <form style={{display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '300px', margin: 'auto'}}>
          <input 
            type="text" 
            placeholder="Name..."
          />
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
        <p style={{textAlign: 'center'}}>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Register;