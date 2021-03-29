
const payload = require('../constants/payloadConstant')
const qr_code = require('../actions/qr_code_dinamico')


class gerar_qr_code {


    qr_code_dinamico = async (req, res)=>{

        const {value, merchant_name, merchant_city } = req.body
        if(!value || !merchant_city || !merchant_name) return res.status(402).json({"value" : "?", "merchant_city" : "?", "merchant_city" : "?"})

        const qr_code_dinamico = new qr_code()
        const qr_code2 = await qr_code_dinamico.gerar_qr_code(req.body, 'cactvs-api-pix-prod-69b68584c8-bs2bd', '123456')

        return res.status(200).json({"qr_code": qr_code2})
       //return res.status(404).json({error: 'error'})
    }

}

module.exports = gerar_qr_code




