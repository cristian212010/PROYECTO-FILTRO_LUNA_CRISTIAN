import React from 'react';

const Home = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido al inicio.</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
