import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const EditUser = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    cargo: '',
    avatar: '',
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

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    const nombre = localStorage.getItem('nombre');
    const apellido = localStorage.getItem('apellido');
    const cargo = localStorage.getItem('cargo');
    const avatar = localStorage.getItem('avatar');

    if (usuario) {
      setFormData({
        usuario,
        nombre,
        apellido,
        cargo: cargo || null, 
        avatar,
      });
      axios.get(`http://localhost:6996/usuarios/getOne/${usuario}`).then((response) => {
        const userData = response.data[0];
        if (userData) {
          const userCargo = userData.cargo ? userData.cargo._id : '';
          setFormData((prevData) => ({
            ...prevData,
            cargo: userCargo,
          }));
        }
      });
    }
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
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64Image = e.target.result;
      setFormData({
        ...formData,
        avatar: base64Image,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submitEdit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('apellido', formData.apellido);
    data.append('usuario', formData.usuario);
    data.append('cargo', formData.cargo);
    data.append('avatar', formData.avatar);

    try {
      const userId = localStorage.getItem('_id');
      const token = localStorage.getItem('token');
      await axios.put(`http://localhost:6996/usuarios/update/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Datos de usuario actualizados con éxito');
      localStorage.setItem('nombre', formData.nombre);
      localStorage.setItem('apellido', formData.apellido);
      localStorage.setItem('avatar', formData.avatar);

      history.push('/home');
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
      setMensajeError('Error al actualizar los datos del usuario');
    }
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      {mensajeError && <p>{mensajeError}</p>}
      <form onSubmit={submitEdit}>
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
            readOnly
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
            <option value=''>Seleccionar Cargo</option>
            {cargos.map((cargo) => (
              <option key={cargo._id} value={cargo._id}>
                {cargo.cargo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Avatar:</label>
          {formData.avatar && <img src={formData.avatar} alt="Avatar" />}
          <input
            type="file"
            accept="image/*"
            onChange={avatarChange}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
        <Link to="/home">Regresar</Link>
      </form>
    </div>
  );
};

export default EditUser;
