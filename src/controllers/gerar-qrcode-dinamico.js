
const payload = require('../constants/payloadConstant')
const qr_code = require('../actions/qr_code_dinamico')


class gerar_qr_code {


    qr_code_dinamico = (req, res)=>{
        console.log(req.body)
       // const {number, card} = req.body

       // if(!number || !card) return res.status(402)

        const qr_code_dinamico = new qr_code()
        const qr_code2 = qr_code_dinamico.gerar_qr_code(req.body, 'https:/correios/cep', '123456')

        return res.status(200).json({"qr_code": qr_code2})
       //return res.status(404).json({error: 'error'})
    }

}

module.exports = gerar_qr_code




