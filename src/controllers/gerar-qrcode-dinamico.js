
const payload = require('../constants/payloadConstant')
const qr_code = require('../actions/qr_code_dinamico')


class gerar_qr_code {


    qr_code_dinamico = async (req, res)=>{

        const {value, merchant_name, merchant_city, cid } = req.body
        if(!cid) return res.status(402).json({"cid": "obrigatorio"})
        if(!value) value = '0.00'
        if(!merchant_name) merchant_name = '*'
        if(!merchant_city) merchant_city = '*'

        const qr_code_dinamico = new qr_code()
        const qr_code2 = await qr_code_dinamico.gerar_qr_code(req.body, 'cactvs-api-pix-prod-69b68584c8-bs2bd', cid)

        return res.status(200).json({"qr_code": qr_code2})
    }

}

module.exports = gerar_qr_code




