# Frontend del Proyecto 🚀

La aplicación está desarrollada en React y utiliza varias librerías y componentes para lograr sus funcionalidades. A continuación, se detalla la estructura del proyecto y sus componentes principales.

## Estructura de Directorios 📁

- **src**: Este directorio contiene todo el código fuente de la aplicación.

  - **components**: Contiene los componentes de React utilizados en la aplicación.
    - **App.jsx**: El componente principal que gestiona las rutas y la navegación.
    - **Home.jsx**: La página principal que muestra una lista de indicadores.
    - **Login.jsx**: La página de inicio de sesión.
    - **Register.jsx**: La página de registro de usuario.
    - **Loader.jsx**: Una página de carga que se muestra al iniciar sesión.
    - **Reportes.jsx**: La página de reportes.
    - **Navbar.jsx**: La barra de navegación en la parte superior.
    - **RenderAccordion.jsx**: Un componente para mostrar preguntas frecuentes en un acordeón.
    - **EditUser.jsx**: La página de edición de perfil de usuario.

  - **assets**: Contiene archivos estáticos como imágenes y estilos.
  
- **public**: Contiene archivos públicos como el ícono de la aplicación y el archivo HTML principal.

## Componentes Principales 📌

### App.jsx

El componente principal que gestiona las rutas y la navegación de la aplicación. Utiliza React Router para definir las rutas y renderizar componentes.

### Home.jsx

La página principal de la aplicación, que muestra una lista de indicadores. Obtiene datos de indicadores desde una API y los muestra en una tabla.

### Login.jsx

La página de inicio de sesión que permite a los usuarios autenticarse en la aplicación. Los datos de inicio de sesión se envían a través de una solicitud HTTP a la API.

### Register.jsx

La página de registro de usuario. Permite a los usuarios registrarse proporcionando información como nombre, apellido, usuario, contraseña, cargo y avatar.

### Loader.jsx

Una página de carga que se muestra después de iniciar sesión exitosamente. Muestra el nombre del usuario y una imagen de avatar.

### Reportes.jsx

La página de reportes que permite a los usuarios crear y gestionar reportes. Muestra una lista de problemas y permite eliminarlos.

### Navbar.jsx

La barra de navegación en la parte superior de la aplicación con enlaces a diferentes secciones y opciones de usuario, como cerrar sesión y editar perfil.

### RenderAccordion.jsx

Un componente que muestra preguntas frecuentes en un acordeón. Los datos de las preguntas y respuestas se definen en el propio componente.

### EditUser.jsx

La página de edición de perfil de usuario. Permite a los usuarios editar su información personal, como nombre, apellido, cargo y avatar.

## Uso 🚦

1. Asegúrate de tener Node.js y npm instalados en tu sistema.
2. Clona este repositorio en tu máquina.
3. Abre una terminal en el directorio raíz del proyecto y ejecuta `npm install` para instalar las dependencias.
4. Luego, ejecuta `npm start` para iniciar la aplicación en modo desarrollo.

## Notas Adicionales 📝

- La aplicación utiliza React Router para gestionar las rutas y la navegación.
- Para la comunicación con el backend, se utilizan solicitudes HTTP a través de la librería Axios.
- Los estilos se gestionan a través de CSS y la librería Chakra UI se utiliza para algunos componentes.
- Se implementa la autenticación de usuarios y la gestión de sesiones.

## Contribuciones 🤝

Si deseas contribuir a este proyecto, no dudes en abrir algún pull request con tus cambios. También puedes informar sobre problemas que encuentres en el proyecto.

## Licencia 📜

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](../LICENSE) para obtener más detalles.
