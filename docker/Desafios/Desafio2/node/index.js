const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config)

const CREATE_TABLE = "CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name VARCHAR(255), primary key (id))"
connection.query(CREATE_TABLE)

const SELECT = `SELECT * FROM people`


app.get('/', (req,res) => {

    const { name } = req.query;

    if (name) {
        connection.query(`INSERT INTO people(name) VALUES ('${name}')`)
    } else {
        connection.query(`INSERT INTO people(name) VALUES ('Eduardo')`)
    }
    
    connection.query(SELECT, function(err, result, fields) {
        if (err) throw err;

        let data = "";

        Object.keys(result).forEach(function(key) {

        data += "<li>" + result[key].name +"</li>";
        });

        res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>${data}</ol>
        `)
    })
    
})


app.listen(port, () => {
    console.log("Rodando na porta " + port)
})