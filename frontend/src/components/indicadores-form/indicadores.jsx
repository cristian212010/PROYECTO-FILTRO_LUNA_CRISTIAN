import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import axios from 'axios';
import '../../assets/styles/indicadores.css';

const Indicadores = () =>{
    const history = useHistory();
    const [formData, setFormData] = useState({
      indicador: '',
      descripcion: '',
      categoria: '',
      fecha_inicio: '',
      fecha_fin: '',
      formula: '',
      frecuencia: '',
      cumplimiento: '',
      area: '',
      estado: ''
    });

    const [areas, setArea] = useState([]);
    const [mensajeError, setMensajeError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:6996/areas/getAll')
          .then((response) => {
            const areas = response.data;
            setArea(areas);
          })
          .catch((error) => {
            console.error('Error al cargar la lista de areas:', error);
            setMensajeError('Error al cargar la lista de areas');
          });
    }, []);

    const inputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const submitIndicador = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('indicador', formData.indicador);
        data.append('descripcion', formData.descripcion);
        data.append('categoria', formData.categoria);
        data.append('fecha_inicio', formData.fecha_inicio);
        data.append('fecha_fin', formData.fecha_fin);
        data.append('formula', formData.formula);
        data.append('frecuencia', formData.frecuencia);
        data.append('cumplimiento', formData.cumplimiento);
        data.append('area', formData.area);
        data.append('estado', formData.estado);
    
        try {
            console.log(formData);
          console.log('Enviando solicitud de registro con los siguientes datos:', data);
          const response = await axios.post('http://localhost:6996/indicadores/insert', data);
          console.log('Respuesta del servidor después de registrar:', response.data);
          history.push('/home'); 
        } catch (error) {
          console.error('Error al registrar al usuario:', error);
        }
    };

    return(
        <div>      
            <Navbar></Navbar>
            <div className="form-indicadores">
                <div class="form-container">
                    <form class="form" onSubmit={submitIndicador}>
                        <span class="heading">Crear Indicador</span>
                        {mensajeError && <p>{mensajeError}</p>}
                        <div className="input-indicadores">
                            <input
                                placeholder="Indicador"
                                type="text"
                                name="indicador"
                                value={formData.indicador}
                                onChange={inputChange}
                                class="input"
                                required
                            />
                            <input
                                placeholder="Categoria"
                                type="text"
                                name="categoria"
                                value={formData.categoria}
                                onChange={inputChange}
                                class="input"
                                required
                            />
                        </div>
                        <div className="input-indicadores">
                            <input
                                placeholder="Fecha Inicio"
                                type="date"
                                name="fecha_inicio"
                                value={formData.fecha_inicio}
                                onChange={inputChange}
                                class="input"
                                required
                            />
                            <input
                                placeholder="Fecha Fin"
                                type="date"
                                name="fecha_fin"
                                value={formData.fecha_fin}
                                onChange={inputChange}
                                class="input"
                                required
                            />
                        </div>
                        <div className="input-indicadores">
                            <input
                                placeholder="Formula"
                                type="text"
                                name="formula"
                                value={formData.formula}
                                onChange={inputChange}
                                class="input"
                                required
                            />
                            <input
                                placeholder="Frecuencia"
                                type="text"
                                name="frecuencia"
                                value={formData.frecuencia}
                                onChange={inputChange}
                                class="input"
                                required
                            />
                        </div>
                        <div className="input-indicadores">
                            <input
                                placeholder="Cumplimiento"
                                type="text"
                                name="cumplimiento"
                                value={formData.cumplimiento}
                                onChange={inputChange}
                                class="input"
                                required
                            />
                            <select
                                name="area"
                                onChange={inputChange}
                                required
                                value={formData.area}
                                className="input"
                            >
                                <option value="">Seleccionar Area</option>
                                {areas.map((area) => (
                                    <option key={area._id} value={area._id}>
                                        {area.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <textarea
                            placeholder="Descripción"
                            rows="10"
                            cols="30"
                            id="message"
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={inputChange}
                            class="textarea"
                            required
                        ></textarea>
                        <div class="button-container">
                        <button type='submit' class="send-button">Enviar</button>
                        <div class="reset-button-container">
                            <div id="reset-btn" class="reset-button">Reset</div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Indicadores;