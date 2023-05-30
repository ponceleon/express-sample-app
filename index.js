import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
import bodyParser from 'bodyParser';

dotenv.config();

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a MySQL: ', err);
    } else {
        console.log('Conexión exitosa a MySQL.');
    }
});

const app = express();


app.get('/', (req, res) => {
    res.send('Choo Choo! Welcome to your Express app 🚅');
})

app.get("/json", (req, res) => {
    res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})