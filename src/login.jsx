import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser, loginUser } from './actions';

// eslint-disable-next-line
const Login = ({ registerUser, loginUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      registerUser({ username, password });
      setUsername('');
      setPassword('');
      return navigate('/tweets');
    }
  };

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      loginUser({ username, password });
      setUsername('');
      setPassword('');
      return navigate('/tweets');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese su nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Ingrese su contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (user) => dispatch(registerUser(user)),
    loginUser: (user) => dispatch(loginUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
