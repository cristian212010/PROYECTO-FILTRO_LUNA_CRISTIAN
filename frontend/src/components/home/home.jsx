import React from 'react';

<<<<<<< HEAD
=======
<<<<<<< HEAD
const Home = ()=>{
    <p>Hola</p>
}
=======
>>>>>>> Front-Authentication
const Home = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
<<<<<<< HEAD
=======
>>>>>>> 5747eeb (fix: :lock: Login authentication)
>>>>>>> Front-Authentication

  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido al inicio.</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
