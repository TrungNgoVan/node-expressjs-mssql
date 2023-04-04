'use strict';

const express = require('express');
const config = require('./config');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('common'));

routes(app);

app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.hostUrl}`);
});
