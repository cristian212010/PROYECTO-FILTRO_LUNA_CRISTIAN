
import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const Loader = () => {
  const location = useLocation();

  const nombre = localStorage.getItem('nombre');
  const apellido = localStorage.getItem('apellido');
  const avatar = localStorage.getItem('avatar');

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (nombre && apellido && avatar) {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000);
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
    <div>
      <h2>Bienvenido, {nombre} {apellido}</h2>
      <img src={avatar} alt="Avatar" />
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;

