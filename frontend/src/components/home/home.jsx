import React, { useState, useEffect } from 'react';
import '../../assets/styles/home.css'
import axios from 'axios'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import * as GiIcons from 'react-icons/gi'
import Navbar from '../navbar/navbar';

const Home = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:6996/indicadores/getAll`)
      .then((response) => {
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
          <h1>Panel de Indicadores</h1>
          <p>Aqui puedes visualizar los indicadores propuestos y añadidos por tu equipo de trabajo. Si quieres ver más detalles , dale click a uno de ellos para más información.</p>
        </div>
        <div>
          <table class="tablita">
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
                <th></th>
              </tr>
            </thead>
            {
              APIData.map((data) => {
                return (
                  <tbody>
                    <tr>
                      <td>{data.indicador}</td>
                      <td className="descripcion">{data.descripcion}</td>
                      <td>{data.categoria}</td>
                      <td>{data.fecha_inicio}</td>
                      <td>{data.fecha_fin}</td>
                      <td>{data.formula}</td>
                      <td>{data.frecuencia}</td>
                      <td> <CircularProgress value={data.cumplimiento} color={data.cumplimiento < 50 ? "red" : (data.cumplimiento >= 50 && data.cumplimiento <= 75) ? "orange" : "green"}><CircularProgressLabel><p className='porcentaje'><strong>{data.cumplimiento}%</strong></p></CircularProgressLabel> </CircularProgress></td>
                      <td>{data.area[0].nombre}</td>
                      <div className='icon'><GiIcons.GiHamburgerMenu></GiIcons.GiHamburgerMenu></div>
                    </tr>
                    <tr className="spacer">
                      <td colspan="100"></td>
                    </tr>
                  </tbody>
                )
              })
            }
          </table>
        </div>
        <button className='btn-add'>Añadir Elementos</button>
       </div> 
       </div> 
  );
};


export default Home;
