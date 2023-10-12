import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../assets/styles/home.css";
import Navbar from '../navbar/navbar';


const Reportes = () => {

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:6996/reportes/getAll`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      })
  })

  return (
    <div>
      <div>
      <Navbar></Navbar>
      </div>
      <div className='content'>
        <div className='text'>
          <h1>Panel de Reportes</h1>
          <p>Aqui puedes visualizar los Reportes ocurridos y los añadidos Recientemente por tu equipo de trabajo.</p>
        </div>
        <div>
          <table class="tablita">
            <thead>
            <tr>
              <th>Problema</th>
              <th>Reportado Por</th>
              <th>Fecha_Reporte</th>
              <th>Indicador Afectado</th>
            </tr>
            </thead>
            {
              APIData.map((data) => {
                return (
                  
                  <tbody>
                    <tr>
                    <td>{data.problema}</td>
                    <td>{data.documentalista[0].nombre} {data.documentalista[0].apellido}</td>
                    <td>{data.fecha_reporte}</td>
                    <td>{data.indicador[0].indicador}</td>
                    </tr>
                  </tbody>
              
                )
              })
            }
          </table>
        </div>
        <Link to='/crearReportes'>
            <button className='btn-add'>Añadir Elementos</button>
        </Link>
       </div> 
       </div> 
  );
};

export default Reportes;



