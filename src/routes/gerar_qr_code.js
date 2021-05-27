const express = require('express')
const qr_code_dinamic_Controller = require('../controllers/gerar-qrcode-dinamico')
const qr_code_estatic_Controller = require('../controllers/gerar-qrcode-estatico')
const verifyJWT = require('../actions/verifyJWT')
const router = express.Router()

const qrcode_dinamic = new qr_code_dinamic_Controller()
const qrcode_estatico = new qr_code_estatic_Controller()
const verify = new verifyJWT()

//router.get('/qr_code_dinamico', verify.verify ,qrcode_dinamic.qr_code_dinamico)
router.post('/qr_code_estatico', verify.verify, qrcode_estatico.qr_code_estatico)


module.exports = router