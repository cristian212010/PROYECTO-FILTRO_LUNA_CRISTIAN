# Frontend del Proyecto

A continuación, encontrarás información detallada sobre los archivos, las rutas y los controladores del backend.

## Archivos

### connection.js

 Este archivo establece la conexión a la base de datos MongoDB. Utiliza la librería mongodb y carga la configuración desde las variables de entorno. La función connect() se encarga de conectarse a la base de datos y devuelve una instancia de la base de datos.

### server.js

 El archivo server.js contiene la configuración y el inicio del servidor Express. Se define una clase Server que configura el servidor, middleware como CORS y JSON parsing, y define rutas para los recursos de indicadores, usuarios, reportes, áreas y cargos. También se agrega la documentación de la API utilizando Swagger UI.

### index.js

 Este archivo es el punto de entrada principal del backend. Carga la configuración y crea una instancia del servidor, luego la inicia para escuchar las solicitudes entrantes.

## Controladores

### Controlador de Áreas (areas.controllers.js)

- getData: Obtiene todas las áreas activas desde la base de datos.
- insertData: Inserta una nueva área en la base de datos.
- deleteData: Elimina un área según su ID.
- updateData: Actualiza los datos de un área existente según su ID.

### Controlador de Cargos (cargos.controllers.js)

- getData: Obtiene todos los cargos activos desde la base de datos, incluyendo información del departamento al que pertenecen.
- insertData: Inserta un nuevo cargo en la base de datos.
- deleteData: Elimina un cargo según su ID.
- updateData: Actualiza los datos de un cargo existente según su ID.

### Controlador de Indicadores (indicadores.controllers.js)

- getData: Obtiene todos los indicadores activos desde la base de datos, incluyendo información del área a la que están asociados.
- insertData: Inserta un nuevo indicador en la base de datos.
- deleteData: Elimina un indicador según su ID.
- updateData: Actualiza los datos de un indicador existente según su ID.

### Controlador de Login (login.controllers.js)

- login: Permite a los usuarios autenticarse. Verifica las credenciales y genera un token de autenticación JWT.

### Controlador de Reportes (reportes.controllers.js)

- getData: Obtiene todos los reportes activos desde la base de datos, incluyendo información sobre el indicador asociado y el documentalista.
- insertData: Inserta un nuevo reporte en la base de datos.
- deleteData: Elimina un reporte según su ID.
- updateData: Actualiza los datos de un reporte existente según su ID.

### Controlador de Usuarios (usuarios.controllers.js)

- getData: Obtiene todos los usuarios activos desde la base de datos, incluyendo información sobre el cargo que ocupan.
- getOneData: Obtiene un usuario específico según su nombre de usuario.
- insertData: Inserta un nuevo usuario en la base de datos.
- deleteData: Elimina un usuario según su ID.
- updateData: Actualiza los datos de un usuario existente según su ID.

### Generación de JWT (generateJWT.js)

 Este archivo contiene una función que genera un token JWT después de la autenticación del usuario.

### Validación de JWT (validateToken.js)

 Este archivo define un middleware que valida el token JWT en las solicitudes entrantes y verifica la existencia y el estado del usuario en la base de datos.

## Rutas

### Rutas de Áreas (areas.routes.js)

- GET /getAll: Obtiene todas las áreas activas.
- POST /insert: Inserta una nueva área.
- DELETE /delete/:id: Elimina un área según su ID.
- PUT /update/:id: Actualiza los datos de un área existente.

### Rutas de Cargos (cargos.routes.js)

- GET /getAll: Obtiene todos los cargos activos.
- POST /insert: Inserta un nuevo cargo.
- DELETE /delete/:id: Elimina un cargo según su ID.
- PUT /update/:id: Actualiza los datos de un cargo existente.

### Rutas de Indicadores (indicadores.routes.js)

- GET /getAll: Obtiene todos los indicadores activos.
- POST /insert: Inserta un nuevo indicador.
- DELETE /delete/:id: Elimina un indicador según su ID.
- PUT /update/:id: Actualiza los datos de un indicador existente.

### Rutas de Login (login.routes.js)

- POST /login: Permite a los usuarios autenticarse y obtiene un token JWT.

### Rutas de Reportes (reportes.routes.js)

- GET /getAll: Obtiene todos los reportes activos.
- POST /insert: Inserta un nuevo reporte.
- DELETE /delete/:id: Elimina un reporte según su ID.
- PUT /update/:id: Actualiza los datos de un reporte existente.

### Rutas de Usuarios (usuarios.routes.js)

- GET /getAll: Obtiene todos los usuarios activos.
- GET /getOne/:usuario: Obtiene un usuario específico por su nombre de usuario.
- POST /insert: Inserta un nuevo usuario.
- DELETE /delete/:id: Elimina un usuario según su ID.
- PUT /update/:id: Actualiza los datos de un usuario existente.

## Configuración

 El servidor utiliza variables de entorno para la configuración, incluyendo la cadena de conexión a la base de datos y la clave secreta o privada para la generación de tokens JWT.

 Asegúrate de configurar estas variables de entorno antes de iniciar el servidor.


## Contribuciones

Si deseas contribuir a este proyecto, no dudes en abrir algún pull request con tus cambios. También puedes informar sobre problemas que encuentres en el proyecto.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más detalles.