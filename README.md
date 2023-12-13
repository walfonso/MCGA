# MCGA- API dbmarket 2023

Desarrollar un servidor API REST que cumpla con los siguientes requisitos:

Un método GET para poder obtener datos de la base de datos.
Un método GET para poder obtener un elemento por id de la base de datos.
Un método POST para poder agregar un elemento a la base de datos.
Un método PUT para poder editar un elemento a la base de datos.
Un método DELETE para poder eliminar un elemento a la base de datos.

---

## Puesta en marcha del Servidor

Servidor desarrollado con Node.js, usando el framework express.

1. `npm install` -> _Para instalar las dependencias de desarrollo y del proyecto_
2. `npm start` -> _Para ejecutar el servidor_

---

## Arquitectura de carpetas

1. `/config` -> _conexion a la Base de datos_
2. `/controllers` -> _Controladores_
3. `/models` -> _Modelos_
4. `/routes` -> _Rutas_

---

## Conección a la Base de Datos

Se utiliza una base de datos noSQL **_MongoDB_** hosteada en la nube usando **_MongoDB Atlas_**, conectado con **_mongoose_**.

---

## Vista local del proyecto

en navegador, probarlo en el http://localhost:3000

---

## Vista Online del proyecto

View the hosted on [Heroku] (https://dbmarket-2023-3d2ee059ea6d.herokuapp.com/)

---

## Desarrollo de APIs

### Walter Alfonso: recurso `product`

- ruta de la api: (ruta del servidor)**_/api/product_**
- Acceso a los métodos CRUD - MongoDB:

1.  `addProduct` -> _Productos - Agregar producto_
2.  `updateProduct` -> _Productos - Actualizar datos del producto_
3.  `deleteProduct` -> _Productos - Borrar producto por el Id_
4.  `getAllProducts` -> _Productos - Obtener todos los productos_
5.  `getProductById` -> _Productos - Obtener un producto por el Id_

### Walter Alfonso: recurso `user`

- ruta de la api: (ruta del servidor)**_/api/user_**
- Acceso a los métodos CRUD - MongoDB:

1.  `addUser` -> _Usuarios - Agregar usuario_
2.  `updateUser` -> _Usuarios - Actualizar datos del usuarios_
3.  `deleteUser` -> _Usuarios - Borrar usuario por el Id_
4.  `getAllUsers` -> _Usuarios - Obtener todos los usuarios_
5.  `getUserById` -> _Usuarios - Obtener un usuarios por el Id_
6.  `Login` -> _Usuarios - Inicio de Sesión de usuarios_

- Walter Alfonso © Año 2023

### Juan Cruz Lombardo Bonino: recurso `client`

- ruta de la api: (ruta del servidor)**_/api/client_**
- Acceso a los métodos CRUD - MongoDB:

1.  `addNewClient` -> _Clientes - Agregar cliente_
2.  `updateClient` -> _Clientes - Actualizar datos del cliente_
3.  `deleteClient` -> _Clientes - Borrar cliente por el Id_
4.  `getAllClients` -> _Clientes - Obtener todos los clientes_
5.  `getClientById` -> _Clientes - Obtener un cliente por el Id_

### Ruben Sato: recurso `supplier`

- ruta de la api: (ruta del servidor)**_/api/supplier_**
- Acceso a los métodos CRUD - MongoDB:

1.  `addNewSupplier` -> _Proveedores - Agregar proveedor_
2.  `updateSupplier` -> _Proveedores - Actualizar datos del proveedor_
3.  `deleteSupplier` -> _Proveedores - Borrar proveedor por el Id_
4.  `getAllSuppliers` -> _Proveedores - Obtener todos los proveedores_
5.  `getSupplierById` -> _Proveedores - Obtener un proveedor por el Id_

---

## Integrantes del equipo - License & copyright

Walter Alfonso - Juan Cruz Lombardo Bonino - Ruben Sato

© Año 2021
