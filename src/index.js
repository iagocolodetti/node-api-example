const express = require('express');
const cors = require('cors');
const mysql = require('./controllers/MySQL');
const routes = require('./routes');

const app = express();

mysql.connect('localhost', 3306, 'contatodb', 'root', 'root');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);