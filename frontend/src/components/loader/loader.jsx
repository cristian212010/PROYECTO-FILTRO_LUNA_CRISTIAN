import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const Loader = ({ userData }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (redirect) {
    return <Redirect to="/home" />;
  }

  if (!userData) {
    return (
      <div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Bienvenido, {userData.nombre} {userData.apellido}</h2>
      <img src={userData.avatar} alt="Avatar" />
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;
