import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../assets/styles/reportes.css";
import Navbar from '../navbar/navbar';


const Reportes = () => {

  const [APIData, setAPIData] = useState([]);
  const Avatar = localStorage.getItem("avatar");
  
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
        <div className='cardContainer'>
            {
              APIData.map((data) => {
                return (
                  
                  <div className="card">
                    <div className="img"><img src={Avatar} alt="" /></div>
                    <span>Fecha Reporte <hr/>
                    {data.fecha_reporte}</span>
                    <p className="info">
                      Indicador: {data.indicador[0].indicador}
                    </p>
                    <p className="info">
                      Problema: {data.problema}
                    </p>

                    <div className='infoUser'>
                      Reprotado por: <hr/>
                      {data.documentalista[0].nombre} {data.documentalista[0].apellido}
                    </div>
                  </div>
              
                )
              })
            }
        </div>
        <Link to='/crearReportes'>
            <button className='btn-add'>Añadir Elementos</button>
        </Link>
       </div> 
       </div> 
  );
};

export default Reportes;



