# MCGA- Parcial 1

Desarrollar un servidor API REST que cumpla con los siguientes requisitos:

Un método GET para poder obtener datos de la base de datos.
Un método GET para poder obtener un elemento por id de la base de datos.
Un método POST para poder agregar un elemento a la base de datos.
Un método PUT para poder editar un elemento a la base de datos.
Un método DELETE para poder eliminar un elemento a la base de datos.

---
## Puesta en marcha del Servidor

Servidor desarrollado con Node.js, usando el framework express.

1. `npm install`  ->  _Para instalar las dependencias de desarrollo y del proyecto_
2. `npm start`  ->  _Para ejecutar el servidor_

---
## Arquitectura de carpetas

`/controllers`   ->  _Controladores_
`/models`  ->  _Modelos_
`/routes`  ->  _Rutas_

---
## Conección a la Base de Datos

Se utiliza una base de datos noSQL ***MongoDB*** hosteada en la nube usando ***MongoDB Atlas***, conectado con ***mongoose***.

---
## Vista local del proyecto

en navegador, probarlo en el http://localhost:3000


---
## Vista Online del proyecto

View the hosted on [Heroku] (https://dbmarket.herokuapp.com/)


---
## Desarrollo de APIs

### Walter Alfonso: recurso `product` 
- ruta de la api: (ruta del servidor)***/api/product***
Acceso a los métodos  CRUD - MongoDB:
1. `addProduct` -> _Productos - Agregar producto_
2. `updateProduct` -> _Productos - Actualizar datos del producto_
3. `deleteProduct` -> _Productos - Borrar producto por el Id_
4. `getAllProducts` -> _Productos - Obtener todos los productos_
5. `getProductById` -> _Productos - Obtener un producto por el Id_
6. `getProductByCategory` -> _Productos - Obtener productos por Categoría_


### Juan Bonino: recurso `client`
- ruta de la api: (ruta del servidor)***/api/client***
Acceso a los métodos  CRUD - MongoDB:
1. `addNewClient` -> _Clientes - Agregar cliente_
2. `updateClient` -> _Clientes - Actualizar datos del cliente_
3. `deleteClient` -> _Clientes - Borrar cliente por el Id_
4. `getAllClients` -> _Clientes - Obtener todos los clientes_
5. `getClientById` -> _Clientes - Obtener un cliente por el Id_


### Ruben Sato***: recurso `supplier`
- ruta de la api: (ruta del servidor)***/api/supplier***
Acceso a los métodos  CRUD - MongoDB:
1. `addNewSupplier` -> _Proveedores - Agregar proveedor_
2. `updateSupplier` -> _Proveedores - Actualizar datos del proveedor_
3. `deleteSupplier` -> _Proveedores - Borrar proveedor por el Id_
4. `getAllSuppliers` -> _Proveedores - Obtener todos los proveedores_
5. `getSupplierById` -> _Proveedores - Obtener un proveedor por el Id_


---
# Integrantes del equipo - License & copyright

Walter Alfonso - Juan Cruz Lombardo Bonino - Ruben Sato

© Año 2021  
