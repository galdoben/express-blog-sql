const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'rootroot',
    database: 'posts',
})

connection.connect((err) => {
    if (err) throw err;      //espone l'errore
    console.log('MySQL!');

})


module.exports = connection;