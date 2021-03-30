const qr_code_est = require('../actions/qr_code_estatico')

class gerar_qrcode_estatico {


  qr_code_estatico = async (req, res) => {

    var { txid_payload, cid, value, merchant_name, merchant_city } = req.body
    if (!cid) return res.status(404).json({ "chave obrigatoria": '? ' })


    //classe que contem o metodo que gera o qr code estatico
    const qr_code_estatico = new qr_code_est()
    const qr_code = await qr_code_estatico.gerar_qr_code_dinamico(req.body)

    return res.status(200).json({ qr_code })

  }

}

module.exports = gerar_qrcode_estatico