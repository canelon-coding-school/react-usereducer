import { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return { ...state, username: '', password: '', error: '' };
    case 'ERROR':
      return { ...state, error: action.error };
  }
};

const Login = () => {
  const navigate = useNavigate();

  const initialState = {
    username: '',
    password: '',
    error: '',
  };

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formState.username.trim() === '' || formState.password.trim() === '') {
      dispatch({ type: 'ERROR', error: 'Los campos nombre de usuario y contraseña son obligatorios' })
    }

    const response = await fetch('http://localhost:9001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username: formState.username,
        password: formState.password
      })
    });

    const responseJson = await response.json();

    if (responseJson.status === 'success') {
      dispatch({ type: 'RESET' });

      return navigate('/dashboard');
    } else {
      dispatch({ type: 'ERROR', error: responseJson.message })
    }
  };

  const handleChange = (e) => {
    dispatch({ type: 'SET_VALUE', field: e.target.name, value: e.target.value });
  }

  const submitDisable = !(formState.username.length > 1 && formState.password.length > 1);

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        {formState.error.length > 0 && <div style={{ color: '#A00' }}>{formState.error}</div>}
        <button
          type="submit"
          className="btn btn-primary btn-block btn-large"
          disabled={submitDisable}
        >
          Let me in
        </button>
      </form>
    </div>
  )
}

export default Login
