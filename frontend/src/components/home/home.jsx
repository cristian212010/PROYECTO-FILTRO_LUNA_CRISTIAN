import React from 'react';

<<<<<<< HEAD
const Home = ()=>{
    <p>Hola</p>
}
=======
const Home = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
>>>>>>> 5747eeb (fix: :lock: Login authentication)

  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido al inicio.</p>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;
