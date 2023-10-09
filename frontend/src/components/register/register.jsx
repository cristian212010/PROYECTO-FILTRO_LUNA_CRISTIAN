import React, { useState, useEffect } from 'react';
import axios from 'axios';
 //form para registro
const Registro = () => {
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
    axios.get('http://localhost:6996/usuarios/getAll')
      .then((response) => {
        const cargos = response.data.map(cargo => ({
          id: cargo._id,
          nombre: cargo.nombre,
        }));
        setCargos(cargos);
      })
      .catch((error) => {
        console.error(error);
        setMensajeError('Error al cargar la lista de cargos');
      });
  }, []);

  const change = (event) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('apellido', formData.apellido);
    data.append('usuario', formData.usuario);
    data.append('password', formData.password);
    data.append('cargo', formData.cargo);
    data.append('avatar', formData.avatar);

    try {
      await axios.post('http://localhost:6996/usuarios/insert', data);

    } catch (error) {
      console.error(error);
      setMensajeError('Error al registrar al usuario');
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      {mensajeError && <p>{mensajeError}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={change}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={change}
            required
          />
        </div>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={change}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={change}
            required
          />
        </div>
        <div>
          <label>Cargo:</label>
          <select
            name="cargo"
            value={formData.cargo}
            onChange={change}
            required
          >
            <option value="">Seleccionar Cargo</option>
            {cargos.map(cargo => (
              <option key={cargo.id} value={cargo.id}>
                {cargo.nombre}
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

export default Registro;
