const express = require('express')
const app = express()
const index = require('./routes/index')
const bodyParser = require('body-parser')
const gerar_qr_code = require('./routes/gerar_qr_code')
const token = require('./routes/token')

//CRIAR UM MIDDLE PARA 

//configurações das rotas
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use((req, res, next)=>{console.log(`[${req.method}] ${req.url}`); return next()})

//Rotas
app.use('/', index)
app.use('/', gerar_qr_code)
app.use('/', token)





module.exports = app