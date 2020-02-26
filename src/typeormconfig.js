export const  typeOrmConfig =  {
    "type": "postgres",
    "host": "127.0.0.1",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "emergencia_medica_db",
    "entities": ["dist/models/*{.ts,.js}"],
    "synchronize": false
}