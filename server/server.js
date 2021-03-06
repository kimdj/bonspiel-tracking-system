'use strict'

const express = require('express');
const compression = require('compression');

const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0';
const APP_FOLDER = 'dist/app'

const app = express();
app.use(compression());

app.get('*.*', express.static(APP_FOLDER, {maxAge: '1y'}));

app.all('*', (req, res) => {
        res.status(200).sendFile('/', {root: APP_FOLDER});
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
