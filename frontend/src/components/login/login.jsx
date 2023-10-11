import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../assets/svg/kario.svg';
import '../../assets/styles/login.css';

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
  });

  const [mensajeError, setMensajeError] = useState('');
  const [userData, setUserData] = useState(null);

  const changeManager = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const redirectLoader = () => {
    history.push({
      pathname: '/loader',
      state: { userData: userData },
    });
  };

  const submitLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:6996/usuarios/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);

      console.log('Inicio de sesión exitoso', response.data);
      const userResponse = await axios.get(`http://localhost:6996/usuarios/getOne/${formData.usuario}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (userResponse.status === 200 && userResponse.data.length > 0) {
        const userDataFromServer = userResponse.data[0];

        if (userDataFromServer.nombre && userDataFromServer.apellido && userDataFromServer.avatar) {
          localStorage.setItem('nombre', userDataFromServer.nombre);
          localStorage.setItem('apellido', userDataFromServer.apellido);
          localStorage.setItem('avatar', userDataFromServer.avatar);

          setTimeout(() => {
            redirectLoader();
          }, 500);
        } else {
          setMensajeError('Datos de usuario incorrectos');
        }
      } else {
        setMensajeError('Datos de usuario incorrectos');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        setMensajeError('Usuario o contraseña incorrectos');
      } else {
        setMensajeError('Error en el servidor, por favor, contacte al servicio técnico');
      }
    }
  };

  return (
    <div className='background'>
      <div className='filter-login'>
        <div className='form-login'>
          <img src={logo} alt="KARIO" className='logo-login' />
          <h2 className='h2-login'>Bienvenido al panel digital de KARIO Media</h2>
          <p className='p-login'>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
          {mensajeError && <p>{mensajeError}</p>}
          <form onSubmit={submitLogin}>
            <div className='div-input'>
              <label>Usuario</label>
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={changeManager}
                required
                className='input-login'
              />
            </div>
            <div className='div-input'>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={changeManager}
                required
                className='input-login'
              />
            </div>
            <button type="submit" className='btn-login'>Iniciar Sesión</button>
          </form>

          <p className='p-registrar'>¿No tienes cuenta? <Link to="/register">Crear una</Link></p>
          <p className='p-problemas'>Tienes problemas para ingresar? Por favor contactarse con asistencia técnica lo más pronto posible</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
