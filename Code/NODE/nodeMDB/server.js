const express = require('express');
const routes = require('./network/routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

routes(app)

const port = 3000
app.listen(port)
console.log(`the application is listening on http://localhost:${port}`)