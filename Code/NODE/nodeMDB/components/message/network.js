const express = require('express');
const response = require('../../network/response')

var app = express()
app.get('/', (req,res)=> {
    res.header({
        "custom-header": "mi propia cabecera personalizada"
    })
    response.sucess(req,res,'respuesta exitosa del get')
})

app.post('/', (req,res)=> {
    if (req.query.error === 'ok'){
        response.error(req,res, "mensaje de error",500,"detalles del error") 
    } else {
        response.sucess(req,res, "creado con exito",201)
    }
})

module.exports = app 