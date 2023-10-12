import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../assets/styles/reportes.css";
import Navbar from '../navbar/navbar';

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import Carta from './card';


const Reportes = () => {

  const [APIData, setAPIData] = useState([]);
  
  
  useEffect(() => {
    axios.get(`http://localhost:6996/reportes/getAll`)
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
          <h1>Panel de Reportes</h1>
          <p>Aqui puedes visualizar los Reportes ocurridos y los añadidos Recientemente por tu equipo de trabajo.</p>
        </div>
        <div className='cardContainer'>
          <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
            <SortableContext
            items={APIData}
            strategy={verticalListSortingStrategy}
            >

            {
              APIData.map((data) => {
                return(
                  <Carta key={data._id} data={data}></Carta>
                )  
              })
            }
            </SortableContext>
            </DndContext>
        </div>
        <Link to='/crearReportes'>
            <button className='btn-add'>Añadir Elementos</button>
        </Link>
       </div> 
       </div> 
  );
};

export default Reportes;



