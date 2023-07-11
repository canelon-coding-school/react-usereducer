import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:9001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ username, password })
    });

    const responseJson = await response.json();

    if (responseJson.status === 'success') {
      setUsername('');
      setPassword('');
      return navigate('/dashboard');
    } else {
      alert('error');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          disabled={!(username.length > 1 && password.length > 1)}
        >
          Let me in
        </button>
      </form>
    </div>
  )
}

export default Login
