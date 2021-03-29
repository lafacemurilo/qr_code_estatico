const payloadConstant = require('../constants/payloadConstant')
const cr16 = require('../actions/crc16')

class qr_code_dinamico {


    gerarlength(valor){

        return valor.length < 10 ? '0' + valor.length : valor.length
    }

    async gerar_qr_code_dinamico(payload_json){
        console.log(payload_json)
        
        const payload = new payloadConstant()
        const CR16 = new cr16()

        const txid = payload_json.txid_payload
        const cid = payload_json.cid
        const value = payload_json.value
        const merchant_name = payload_json.merchant_name
        const merchant_city = payload_json.merchant_city


        var qrcode = payload.dadosGerais.ID_PAYLOAD_FORMAT_INDICATOR + '0201'
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION + (cid.length + 22) 
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION_GUI + '14' + 'br.gov.bcb.pix'
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION_CID +  (cid.length) + cid
        qrcode += payload.dadosGerais.ID_MERCHANT_CATEGORY_CODE + '04' + '0000'
        qrcode += payload.dadosGerais.ID_TRANSACTION_CURRENCY + '03' + '986'
        qrcode += payload.dadosGerais.ID_TRANSACTION_AMOUNT + this.gerarlength(value) + value
        qrcode += payload.dadosGerais.ID_COUNTRY_CODE + '02' +'BR'
        qrcode += payload.dadosGerais.ID_MERCHANT_NAME + this.gerarlength(merchant_name) + merchant_name
        qrcode += payload.dadosGerais.ID_MERCHANT_CITY + this.gerarlength(merchant_city) + merchant_city
        qrcode += payload.dadosGerais.ID_ADDITIONAL_DATA_FIELD_TEMPLATE + this.gerarlength(txid + '0503') //txid + 4 caracteres para dar o tamanho certo (melhorar essa parte do codigo) 
        qrcode += payload.dadosGerais.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID  + this.gerarlength(txid) + txid
        qrcode += payload.dadosGerais.ID_CRC16 +  CR16.getcrc16(qrcode)
      
        return qrcode

    }


}


module.exports = qr_code_dinamico