const express = require('express')

const PORT = 3334
const HOST = '0.0.0.0'

const app = express();

app.get('/', (req, res) => {
    res.send('Application Nodejs')
})

app.listen(PORT, HOST)