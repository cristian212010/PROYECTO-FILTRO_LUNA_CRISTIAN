# 🚀 PROYECTO-FILTRO_GRUPO2

## Proyecto de Desarrollo de Aplicativo Web para Kario Media

Este proyecto contiene el código fuente y la documentación para el desarrollo de un Aplicativo Web que servirá como un panel de gestión de proyectos para la empresa "Kario Media" 🏢. La empresa se dedica a la realización de licitaciones públicas y privadas en diversos nichos de negocio. El objetivo principal de este proyecto es continuar el trabajo iniciado por el equipo de UI/UX, replicando su propuesta de diseño y creando los módulos de "Añadir", "Eliminar", "Reportar", "Ayuda" y "Perfil (Log-In y Log-Out)".

## 📝 Introducción 

Este proyecto tiene como objetivo proporcionar a "Kario Media" una plataforma eficiente para la gestión de proyectos en el ámbito de licitaciones. La gestión eficiente de proyectos es esencial para el éxito de la empresa en la realización de licitaciones tanto públicas como privadas. El aplicativo web desarrollado permitirá a la empresa optimizar su proceso de gestión de proyectos y mejorar su eficiencia operativa.

## 🛠️ Instalación

Para configurar el proyecto, sigue estos pasos:

1. **Clonar el Repositorio**:

   ```bash
   git clone https://github.com/cristian212010/PROYECTO-FILTRO_GRUPO2
   ```

2. **Backend:**

   Accede a la carpeta del backend y realiza las siguientes acciones:

   ```bash
   cd Backend/
   npm i
   npm run start
   ```

3. **Frontend:**

   Abre una nueva terminal y accede a la carpeta del frontend:

   ```bash
   cd ../frontend/
   npm i
   npm start
   ```

## 🚀 Tecnologías Utilizadas

- React ⚛️
- Node.js 🚀
- Express.js 🌐
- MongoDB 📦

## 📃 Documentación Swagger

- **[Documentación Swagger](./Backend/src/swagger/)** - Documentación completa de la API, que incluye operaciones CRUD por CURD.
  - http://localhost:6996/api-doc/

## 📋 Requerimientos Previos

Asegúrate de tener **Node.js v18.18.1** instalado en tu sistema.

## 🌟 Alcance del Proyecto

El proyecto abarca los siguientes componentes y funcionalidades:

### Backend:
- Conexión a una base de datos MongoDB.
- Configuración de un servidor Express.
- Controladores para áreas, cargos, indicadores, login, reportes y usuarios.
- Generación y validación de tokens JWT.
- Definición de rutas para los recursos mencionados.
- Utilización de variables de entorno para configuración.

### Frontend:
- Desarrollo en React.
- Componentes para la página principal, inicio de sesión, registro, carga, reportes, navegación, preguntas frecuentes y edición de perfil de usuario.
- Uso de React Router para gestionar rutas y navegación.
- Comunicación con el backend a través de solicitudes HTTP Axios.
- Estilos en CSS y librería Chakra UI para algunos componentes.
- Implementación de autenticación de usuarios y gestión de sesiones.


## 🔧 Dependencias del Backend

- `bcryptjs` ^2.4.3
- `cors` ^2.8.5
- `dotenv` ^16.3.1
- `express` ^4.18.2
- `express-fileupload` ^1.4.1
- `express-validator` ^7.0.1
- `jsonwebtoken` ^9.0.2
- `mongodb` ^6.1.0
- `mongoose` ^7.6.0
- `swagger-ui-express` ^5.0.0
- `nodemon` ^3.0.1

## 🔧 Dependencias del Frontend

- `bootstrap` ^5.3.2
- `react-dom` ^18.2.0
- `react-icons` ^4.11.0
- `react-router-dom` ^5.3.4
- `react-scripts` 5.0.1
- `semantic-ui-react` ^2.1.4
- `styled-components` ^6.0.8
- `web-vitals` ^2.1.4

## 📂 Estructura y Organización

La estructura de directorios del proyecto está organizada de la siguiente manera:

```
PROYECTO-FILTRO_GRUPO2/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── helpers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── server/
│   │   ├── swagger/
│   │   ├── index.js
│   │
│   ├── .env
│   ├── package.json
│   ├── README.md
│
├── Frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── img/
│   │   │   ├── styles/
│   │   │   ├── svg/
│   │   │
│   │   ├── components/
│   │   │   ├── authentication/
│   │   │   ├── ayuda/
│   │   │   ├── editUser/
│   │   │   ├── home/
│   │   │   ├── indicadores-form/
│   │   │   ├── loader/
│   │   │   ├── login/
│   │   │   ├── navbar/
│   │   │   ├── register/
│   │   │   ├── reportar-form/
│   │   │   ├── reportes/
│   │   │
│   │   ├── App.css
│   │   ├── App.js
│   │
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
│
├── LICENSE
│
└── README
```

## 📸 Capturas de Pantalla

- **Login**
  - ![Captura de Home](screenshot1.png)

- **Home**
  - ![Captura de Home](screenshot1.png)

## 🙌 Contribuidores

- Cristian Camilo Luna: [Perfil de GitHub](https://github.com/cristian212010) 🚀
- Jesus Eduardo Martinez: [Perfil de GitHub](https://github.com/asynkDF) 🚀
- Sebastian Daniel Bernal: [Perfil de GitHub](https://github.com/S3bastianBernal) 🚀
- Yedher David Pineda: [Perfil de GitHub](https://github.com/DavidPineda02) 🚀

¡Gracias a nuestros contribuidores por hacer posible este proyecto! 👏🎉

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📧 Contacto

Si tienes preguntas o sugerencias, no dudes en ponerte en contacto con nosotros:

- **Cristian Camilo Luna**
  - Correo Electrónico: cristiancamilo212010@gmail.com

- **Jesus Eduardo Martinez**
  - Correo Electrónico: jrey22k@gmail.com

- **Sebastian Daniel Bernal**
  - Correo Electrónico: sebas201154@gmail.com

- **Yedher David Pineda**
  - Correo Electrónico: daxpa.02@gmail.com

**¡Disfruta El Proyecto!** 😄