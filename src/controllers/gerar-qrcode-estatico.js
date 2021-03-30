const qr_code_est = require('../actions/qr_code_estatico')

class gerar_qrcode_estatico {


  qr_code_estatico = async (req, res) => {

    //const cid = JSON.stringify(req.headers)
    //recebendo pelo header
    var json = {'cid' : req.headers['cid'], 'value' : req.headers['value'], 'merchant_name': req.headers['merchant_city'], 'merchant_city' : req.headers['merchant_name']}
    if (!json.cid) return res.status(404).json({ "chave obrigatoria": '? ' })


    //classe que contem o metodo que gera o qr code estatico
    const qr_code_estatico = new qr_code_est()
    const qr_code = await qr_code_estatico.gerar_qr_code_estatico(json)

    return res.status(200).json({ qr_code })

  }

}

module.exports = gerar_qrcode_estatico