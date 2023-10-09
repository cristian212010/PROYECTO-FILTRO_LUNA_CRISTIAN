import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    password: '',
    cargo: '',
    avatar: null,
  });

  const [cargos, setCargos] = useState([]);
  const [mensajeError, setMensajeError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:6996/cargos/getAll')
      .then((response) => {
        const cargos = response.data;
        setCargos(cargos);
      })
      .catch((error) => {
        console.error('Error al cargar la lista de cargos:', error);
        setMensajeError('Error al cargar la lista de cargos');
      });
  }, []);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const avatarChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      avatar: file,
    });
  };

  const submitRegister = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('apellido', formData.apellido);
    data.append('usuario', formData.usuario);
    data.append('password', formData.password);
    data.append('cargo', formData.cargo);
    data.append('avatar', formData.avatar);

    try {
      console.log('Enviando solicitud de registro con los siguientes datos:', data);
      const response = await axios.post('http://localhost:6996/usuarios/insert', data);
      console.log('Respuesta del servidor después de registrar:', response.data);
      history.push('/login'); 
    } catch (error) {
      console.error('Error al registrar al usuario:', error);
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      {mensajeError && <p>{mensajeError}</p>}
      <form onSubmit={submitRegister}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={inputChange}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={inputChange}
            required
          />
        </div>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={inputChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={inputChange}
            required
          />
        </div>
        <div>
          <label>Cargo:</label>
          <select
            name="cargo"
            value={formData.cargo}
            onChange={inputChange}
            required
          >
            <option value="">Seleccionar Cargo</option>
            {cargos.map((cargo) => (
              <option key={cargo._id} value={cargo._id}>
                {cargo.cargo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Avatar:</label>
          <input
            type="file"
            name="avatar"
            onChange={avatarChange}
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
export default Register