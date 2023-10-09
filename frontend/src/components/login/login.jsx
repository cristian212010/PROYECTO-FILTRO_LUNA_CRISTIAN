import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom'; 

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
  });

  const [mensajeError, setMensajeError] = useState('');

  const changeManager = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:6996/usuarios/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);

      console.log('Inicio de sesión exitoso', response.data);
      history.push('/home');
    } catch (error) {
      console.error(error);
      setMensajeError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {mensajeError && <p>{mensajeError}</p>}
      <form onSubmit={submitLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={changeManager}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeManager}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      
      <p>¿No tienes cuenta? <Link to="/register">Crear una</Link></p>
    </div>
  );
};

export default Login;
