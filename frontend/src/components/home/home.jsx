import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';

const Home = () => {


  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2>  Inicio</h2>
      <p>Bienvenido al inicio.</p>

    <div className='content'>
      <div className='text'>
        <h2>Panel de Indicadores</h2>
        <p>Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles , dale click a uno de ellos para más información.</p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Terminación</th>
              <th>Fórmula</th>
              <th>Frecuencia</th>
              <th>Cumplimiento</th>
              <th>Área</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>XD</td>
              <td>XD</td>
              <td>XD</td>
              <td>XD</td>
              <td>XD</td>
              <td>XD</td>
              <td>XD</td>
              <td>XD</td>
              <td>XD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
    </div>
  );
};

export default Home;
