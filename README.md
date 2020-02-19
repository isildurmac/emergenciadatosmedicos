# emergenciadatosmedicos
Desarrollo de una aplicación para exponer información médica de emergencia

### Instalar CLI de nest
<code>npm i -g @nestjs/cli </code>

Una vez instalado desde la raiz del proyecto corremos el siguiente comando
para descargarnos e instalar las dependencias:
<code>npm install</code>

### Aplicacion cliente

Nos movemos a la ruta ./client/client y corremos el siguiente comando 
para descargarnos las dependencias:
<code>npm install</code>

#### Desplegar aplicacion cliente
<code>npm run-script build</code>

Luego nos movemos a la raiz del proyecto y corremos el backend
<code>nest start</code>

Podemos acceder a la aplicacion en la ruta http://localhost:3000

### PosgreSQL DataBase

El almacenamiento de los datos es en una base de datos PostgreSQL (emergencia_medica_db) 
y los parametros de configuracion se encuentran en el fichero ormconfig.json

<code>
{
    "type": "postgres",  
    "host": "127.0.0.1",  
    "port": 5432,  
    "username": "postgres",  
    "password": "postgres",  
    "database": "emergencia_medica_db",  
    "entities": ["dist/**/*.entity{.ts,.js}"],  
    "synchronize": true  
}
</code>