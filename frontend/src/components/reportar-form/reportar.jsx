import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import axios from 'axios';

const Reportar = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        indicador: '',
        problema: '',
        documentalista: '',
        fecha_reporte: '',
        estado: ''
    });

    const [indicadores, setIndicadores] = useState([]);
    const [documentalistas, setDocumentalistas] = useState([]);
    const [mensajeError, setMensajeError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:6996/indicadores/getAll')
            .then((response) => {
                const indicadores = response.data;
                setIndicadores(indicadores);
            })
            .catch((error) => {
                console.error('Error al cargar la lista de indicadores:', error);
                setMensajeError('Error al cargar la lista de indicadores');
            });

        axios.get('http://localhost:6996/usuarios/getAll')
            .then((response) => {
                const documentalistas = response.data;
                setDocumentalistas(documentalistas);
            })
            .catch((error) => {
                console.error('Error al cargar la lista de documentalistas:', error);
                setMensajeError('Error al cargar la lista de documentalistas');
            });
    }, []);

    const inputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();

        try {
            console.log('Enviando solicitud con los siguientes datos:', formData);
            const response = await axios.post('http://localhost:6996/reportes/insert', formData);
            console.log('Respuesta del servidor después de registrar:', response.data);
            history.push('/reports');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="form-container">
                <form className="form" onSubmit={submitForm}>
                    <span className="heading">Crear Reporte</span>
                    {mensajeError && <p>{mensajeError}</p>}
                    <div className="input-fields">
                        <select
                            name="indicador"
                            onChange={inputChange}
                            required
                            value={formData.indicador}
                            className="input"
                        >
                            <option value="">Seleccionar Indicador</option>
                            {indicadores.map((indicador) => (
                                <option key={indicador._id} value={indicador._id}>
                                    {indicador.indicador}
                                </option>
                            ))}
                        </select>
                        <input
                            placeholder="Problema"
                            type="text"
                            name="problema"
                            value={formData.problema}
                            onChange={inputChange}
                            className="input"
                        />
                        <select
                            name="documentalista"
                            onChange={inputChange}
                            required
                            value={formData.documentalista}
                            className="input"
                        >
                            <option value="">Seleccionar Documentalista</option>
                            {documentalistas.map((documentalista) => (
                                <option key={documentalista._id} value={documentalista._id}>
                                    {documentalista.nombre}
                                </option>
                            ))}
                        </select>
                        <input
                            placeholder="Fecha de Reporte"
                            type="date"
                            name="fecha_reporte"
                            value={formData.fecha_reporte}
                            onChange={inputChange}
                            className="input"
                        />
                    </div>
                    <div className="button-container">
                        <button type='submit' className="send-button">Enviar</button>
                        <div className="reset-button-container">
                            <div id="reset-btn" className="reset-button">Reset</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reportar;
