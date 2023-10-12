import React, { useState, useEffect } from 'react';
import '../../assets/styles/home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/navbar';
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Tbodie from './Tbodie';

const Home = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:6996/indicadores/getAll`)
      .then((response) => {
        setAPIData(response.data);
      })
  },[])

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log("active", active.id);
    console.log("over", over.id);

    if (!active.id !== over.id) {
      setAPIData((APIData) => {
        const oldIndex = APIData.findIndex((APIData) => APIData._id === active.id);
        const newIndex = APIData.findIndex((APIData) => APIData._id === over.id);

        console.log(arrayMove(APIData, oldIndex, newIndex));
        return arrayMove(APIData, oldIndex, newIndex);
      });
    }

    console.log("drag end");
  };

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
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
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
            <SortableContext
            items={APIData}
            strategy={verticalListSortingStrategy}
            >
            {
              APIData.map((data) => {
                return (
                  <Tbodie key={data._id} data={data}></Tbodie>
                )
              })
            }
            </SortableContext>
          </table>
          </DndContext>
        </div>
        <Link to='/crearIndicadores'>
          <button className='btn-add'>Añadir Elementos</button>
        </Link>
       </div> 
       </div> 
  );
};


export default Home;
