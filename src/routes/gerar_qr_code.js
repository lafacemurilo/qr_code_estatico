const express = require('express')
const qr_code_Controller = require('../controllers/gerar-qrcode-dinamico')
const router = express.Router()

const qrcode = new qr_code_Controller()

router.get('/qr_code', qrcode.qr_code_dinamico)
router.get('/qr_code2', (req, res)=>{ res.status(200).json({})})


module.exports = router