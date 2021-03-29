const express = require('express')
const qr_code_dinamic_Controller = require('../controllers/gerar-qrcode-dinamico')
const qr_code_estatic_Controller = require('../controllers/gerar-qrcode-estatico')
const router = express.Router()

const qrcode_dinamic = new qr_code_dinamic_Controller()
const qrcode_estatico = new qr_code_estatic_Controller()

router.get('/qr_code_dinamico', qrcode_dinamic.qr_code_dinamico)
router.get('/qr_code_estatico', qrcode_estatico.qr_code_estatico)


module.exports = router