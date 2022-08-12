# Documentación ES

- [Documentación en Español](README_DOCUMENTATION_ES.MD)
- [Documentation in English](README_DOCUMENTATION_EN.MD)

## Requisitos previos para instalación

NodeJs `v12.18.0 >`  
MySql `5.7.25 >`

# Pasos

```
Si presenta algún problema para la creación de la base de datos y sus migracione puede utiliza el archivo 'CreateAndSeedDatabase.Sql'
ubicado en '/database/migrations/'
```

1 - Colocarse en la carpeta raíz de la aplicación y ejecutar el comando `npm install`

2 - OJO: No es necesario crear la base de datos ya que al ejecutar la aplicacion la va a crear en caso de que no exista. Pero en caso de que quiera crearla debe dirigirse a la instancia local de el servidor de MySql. Para crear la base de datos puede crearla mediante la instrucción "`create database library-db;`"

3 - Colocarse en la carpeta raíz del proyecto y dirigirse a hasta el archivo `config.json` en la carpeta `/database/config/`. Una vez allí se debe remplazar con las credenciales de la base de datos con la que se desea conectar la aplicación según las opciones más abajo :

```
"development": {
    "username": "usuario_local",
    "password": "clave_local" , // null en caso de no tener contraseña
    "database": "bd_local",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
```
* Si se utilizó el comando "`create database library-db;`" debe colocarse en la opcion "_database_" del archivo `config.json` la base de datos `library-db`.

4 - Colocarse en la carpeta raíz del proyecto y ejecutar el siguiente comando:
```
npm run dev
```

5 - Para poblar su base de datos debe encontrarse en la raiz del proyecto y ejecutar ```npm run db:seed```, esto va a crear los registros de prueba.

# Endpoints

```
/api/v1/books

/api/v1/books/:id/pages/:page/:format
```