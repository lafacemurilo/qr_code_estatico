
const payload = require('../constants/payloadConstant')
const qr_code = require('../actions/qr_code_dinamico')
const token = require('../actions/token_gerencia_net')


class gerar_qr_code {


    qr_code_dinamico = async (req, res)=>{

        const {value, merchant_name, merchant_city, cid } = req.body
        if(!cid) return res.status(402).json({"cid": "obrigatorio"})

        //CRIAR O PAYLOAD
        const tokenn = new token()
        const token_object = await tokenn.gerar_token()


        if(!value) value = '0.00'
        if(!merchant_name) merchant_name = '*'
        if(!merchant_city) merchant_city = '*'

        const qr_code_dinamico = new qr_code()
        const qr_code2 = await qr_code_dinamico.gerar_qr_code(req.body, 'cactvs-api-pix-prod-69b68584c8-bs2bd')

        return res.status(200).json({"qr_code": qr_code2})
    

        return res.json( token_object.data)
 

  //return res.status(200).JSON({'token' : teste})
    }

}

module.exports = gerar_qr_code




