import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import logo from '../../assets/img/KARIO_LOGO.png';
import '../../assets/styles/loader.css';

const Loader = () => {
  const location = useLocation();

  const nombre = localStorage.getItem('nombre');
  const apellido = localStorage.getItem('apellido');
  const avatar = localStorage.getItem('avatar');

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (nombre && apellido && avatar) {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [nombre, apellido, avatar]);

  if (redirect) {
    return <Redirect to="/home" />;
  }

  if (!nombre || !apellido || !avatar) {
    return (
      <div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div  className='background'>
      <div className='filter-login'>
        <div className='form-loeader'>
          <img src={logo} alt="KARIO" className='logo-login' />
          <h2 className='h2-login'>Bienvenido, {nombre} {apellido}</h2>
          <img className='avatarr'src={avatar} alt="Avatar" />    
          <div class="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

