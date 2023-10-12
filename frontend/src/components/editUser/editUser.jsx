import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import '../../assets/styles/profile.css';

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
  const [cargoLocal, setCargoLocal] = useState([]);
  const selectCargoId = cargoLocal.length > 0 ? cargoLocal[0]._id : '';
  const selectCargoNombre = cargoLocal.length > 0 ? cargoLocal[0].cargo : '';
  formData.cargo = selectCargoId;
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
    const cargo = JSON.parse(localStorage.getItem('cargo'));
    setCargoLocal(cargo)
    const avatar = localStorage.getItem('avatar');
    console.log(selectCargoId);

    if (usuario) {
      setFormData({
        usuario,
        nombre,
        apellido,
        cargo, 
        avatar,
      });
      axios.get(`http://localhost:6996/usuarios/getOne/${usuario}`).then((response) => {
        const userData = response.data[0];
        if (userData) {
          setFormData((prevData) => ({
            ...prevData
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
      await axios.put(`http://localhost:6996/cargos/getOne/${formData.cargo}`)
      .then((response) =>{
        localStorage.setItem('cargo', response);
      });

      history.push('/home');
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
      setMensajeError('Error al actualizar los datos del usuario');
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="form-container">
        <form className="form" onSubmit={submitEdit}>
        <span className="heading">Editar Perfil</span>
        {mensajeError && <p>{mensajeError}</p>}
          <div className="input-fields">
            <div className="input-indicadores">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={inputChange}
                className="input"
                required
              />
              <label>Apellido:</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={inputChange}
                className="input"
                required
              />
            </div>
            <div className="input-indicadores">
              <label>Usuario:</label>
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                className="input"
                readOnly
              />
              <label>Cargo:</label>
              <select
                name="cargo"
                value={formData.cargo}
                onChange={inputChange}
                className="input"
                required
              >
                <option value={selectCargoId}>{selectCargoNombre}</option>
                {cargos.map((cargo) => (
                  <option key={cargo._id} value={cargo._id}>
                    {cargo.cargo}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label class="custum-file-upload" for="file">
            <div class="icon">
            {formData.avatar && <img className='img-profile' src={formData.avatar} alt="Avatar" />}
            </div>
            <div class="text">
              <span>Click to upload image</span>
              </div>
              <input
              type="file"
              id='file'
              accept="image/*"
              onChange={avatarChange}
              className="input"
              />
            </label>
          </div>
          <div class="button-container">
            <button type="submit" class="send-button">Guardar Cambios</button>
            <div class="reset-button-container">
              <div id="reset-btn" class="reset-button"><Link to="/home">Regresar</Link></div>
            </div>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default EditUser;
