const payloadConstant = require('../constants/payloadConstant')
const pix_Constant = require('../constants/api_pixConstant')

class qr_code_dinamico {


    async gerar_cobranca_psp(payload_json, url) {


        return payload_json
    }



    async crc16(crc16){

    }

    async gerar_qr_code(payload_json, urlPsp, txid_payload){
        
        const payload = new payloadConstant()
        const api_pixConstant = new pix_Constant()

        const url = urlPsp
        const txid = txid_payload
        const value = payload_json.value
        const merchant_name = payload_json.merchant_name
        const merchant_city = payload_json.merchant_city
        const reference_label  = 'RP12345678-2019'
        
        const lenght_account_information = url.length + txid.length + 20

        var qrcode = payload.dadosGerais.ID_PAYLOAD_FORMAT_INDICATOR + '0201'
        qrcode += payload.dadosGerais.ID_POINT_OF_INITIATION_METHOD + '0212'
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION + lenght_account_information
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION_GUI + '14' + 'br.gov.bcb.pix'
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION_URL + url.length + url
        qrcode += payload.dadosGerais.ID_MERCHANT_CATEGORY_CODE + '04' + '0000'
        qrcode += payload.dadosGerais.ID_TRANSACTION_CURRENCY + '03' + '986'
        qrcode += payload.dadosGerais.ID_TRANSACTION_AMOUNT + value.length + value
        qrcode += payload.dadosGerais.ID_COUNTRY_CODE + '02' +'BR'
        qrcode += payload.dadosGerais.ID_MERCHANT_NAME + merchant_name.length + merchant_name
        qrcode += payload.dadosGerais.ID_MERCHANT_CITY + merchant_city.length + merchant_city
        qrcode += payload.dadosGerais.ID_ADDITIONAL_DATA_FIELD_TEMPLATE + reference_label.lenght
        qrcode += payload.dadosGerais.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID + '15' + reference_label
        qrcode += payload.dadosGerais.ID_CRC16 + 'falta o crc16'

        console.log('entrou aqui' + qrcode)
        return qrcode

    }


}


module.exports = qr_code_dinamico