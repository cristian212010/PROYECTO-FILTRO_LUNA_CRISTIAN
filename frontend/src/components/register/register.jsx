import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import logo from '../../assets/img/KARIO_LOGO.png';
import '../../assets/styles/register.css'

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
      history.push('/login');
    } catch (error) {
      console.error('Error al registrar al usuario:', error);
    }
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
  

  return (
    <div className='background'>
      <div className='filter-login'>
        <div className='form-register'>
          <img src={logo} alt="KARIO" className='logo-login' />
          <h2 className='h2-login'>Registro de Usuario</h2>
          <p className='p-login'>Por favor ingresa los siguientes datos para ingresar a la plataforma</p>
          {mensajeError && <p>{mensajeError}</p>}
          <form onSubmit={submitRegister}>
            <div className='div-input'>
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={inputChange}
                required
                className='input-login'
              />
            </div>
            <div className='div-input'>
              <label>Apellido:</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={inputChange}
                required
                className='input-login'
              />
            </div>
            <div className='div-input'>
              <label>Usuario:</label>
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={inputChange}
                required
                className='input-login'
              />
            </div>
            <div className='div-input'>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={inputChange}
                required
                className='input-login'
              />
            </div>
            <div className='div-input'>
              <label>Cargo:</label>
              <select
                name="cargo"
                value={formData.cargo}
                onChange={inputChange}
                required
                className='input-login'
              >
                <option value="">Seleccionar Cargo</option>
                {cargos.map((cargo) => (
                  <option key={cargo._id} value={cargo._id}>
                    {cargo.cargo}
                  </option>
                ))}
              </select>
            </div>
            <div className='div-input'>
              <label>Avatar:</label>
              <input
                type="file"
                accept="image/*"
                onChange={avatarChange}
                className='input-login'
              />
            </div>
            <button type="submit" className='btn-login'>Registrar</button>
          </form>
          <p className='p-registrar'>¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
        </div>
      </div>
    </div>
  );
};
export default Register