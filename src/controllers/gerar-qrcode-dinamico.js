
const payload = require('../constants/payloadConstant')
const qr_code = require('../actions/qr_code_dinamico')
const token = require('../actions/token_gerencia_net')


class gerar_qr_code {


    qr_code_dinamico = async (req, res)=>{

        const {value, merchant_name, merchant_city, chave } = req.body
        if(!chave) return res.status(402).json({"chave": "obrigatorio"})

        //CRIAR O PAYLOAD
        const tokenn = new token()
        const token_object = await tokenn.gerar_token()


        if(!value) value = '0.00'
        if(!merchant_name) merchant_name = '*'
        if(!merchant_city) merchant_city = '*'

        const qr_code_dinamico = new qr_code()
        const qr_code = await qr_code_dinamico.gerar_qr_code(req.body, 'url_psp')

        return res.status(200).json({"qr_code": qr_code})
 
    }

}

module.exports = gerar_qr_code




