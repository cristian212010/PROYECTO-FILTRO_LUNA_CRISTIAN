import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reportes = () => {

const [APIData, setAPIData] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:6996/reportes/getAll`)
    .then((response)=>{
      console.log(response.data);
      setAPIData(response.data);
    })
  })

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>  Reportes</h2>
      <p>Bienvenido a Reportes.</p>

    <div className='content'>
      <div className='text'>
        <h2>Panel de Reportes</h2>
        <p>Aqui puedes visualizar los Reportes añadidos por tu equipo de trabajo. Si quieres ver más detalles , dale click a uno de ellos para más información.</p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Problema</th>
              <th>Reportado Por</th>
              <th>Fecha_Reporte</th>
              <th>Indicador Afectado</th>
            </tr>
          </thead>
          <tbody>
          {
            APIData.map((data)=>{
              return(
                <tr>
                  <td>{data.problema}</td>
                  <td>{data.documentalista[0].nombre} {data.documentalista[0].apellido}</td>
                  <td>{data.fecha_reporte}</td>
                  <td>{data.indicador[0].indicador}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>

      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
    </div>
  );
};

export default Reportes;