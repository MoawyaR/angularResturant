import mysql from 'mysql';

const db_config ={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'resturant'
}

let connection: mysql.Connection;
connection = mysql.createConnection(db_config);

export default connection;