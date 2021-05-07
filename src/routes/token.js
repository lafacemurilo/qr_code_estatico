const express = require('express')
const router = express.Router()
const token = require('../controllers/gerar_token')

const auth = new token()

router.post('/token/oauth', auth.gerar_token)

module.exports = router

