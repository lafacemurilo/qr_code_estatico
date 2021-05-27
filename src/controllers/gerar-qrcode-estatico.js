const qr_code_est = require('../actions/qr_code_estatico')
const QRCode = require('qrcode')

class gerar_qrcode_estatico {


  qr_code_estatico = async (req, res) => {

    var json = req.body
    
    if (!json.chave) return res.status(404).json({ "chave obrigatoria": '? ' })

    //classe que contem o metodo que gera o qr code estatico
    const qr_code_estatico = new qr_code_est()
    const qr_code = await qr_code_estatico.gerar_qr_code_estatico(json)
   
   //gerar png do qr code a partir do codigo do qr code (base64)
    var qr_code_imagem = async qr_code => {
      try {
        qr_code_imagem = QRCode.toDataURL(qr_code)
      } catch (err) {
        console.error(err)
      }
    }
    qr_code_imagem = await QRCode.toDataURL(qr_code);

   

    return res.status(200).json({'qr_code' : qr_code, 'qr_code_imagem' : qr_code_imagem })

  }

}

module.exports = gerar_qrcode_estatico