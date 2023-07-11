import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="u" placeholder="Username" />
        <input type="password" name="p" placeholder="Password" />
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          onClick={() => { navigate('/dashboard') }}
        >
          Let me in
        </button>
      </form>
    </div>
  )
}

export default Login
