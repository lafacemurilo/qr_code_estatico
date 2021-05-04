const payloadConstant = require('../constants/payloadConstant')
const cr16 = require('../actions/crc16')

class qr_code_estatico {

    gerarlength(valor) {

        return valor.length < 10 ? '0' + valor.length : valor.length
    }

    async gerar_qr_code_estatico(payload_json) {
        console.log(payload_json)

        const payload = new payloadConstant()
        const CR16 = new cr16()

        const txid = !payload_json.txid ? '***' : payload_json.txid
        const cid = payload_json.cid
        const value = !payload_json.value ? '' : payload_json.value
        const merchant_name = !payload_json.merchant_name ? '' : payload_json.merchant_name
        const merchant_city = !payload_json.merchant_city ? '' : payload_json.merchant_city
        const info_add = !payload_json.info_add ? '' : payload_json.info_add

     

        //INFORMAÇÃO PADRÃO 
        var qrcode = payload.dadosGerais.ID_PAYLOAD_FORMAT_INDICATOR + '0201'
        //CASO EXISTA UMA INFORMAÇÃO ADICIONAL, ENTÃO ACRESCENTAR 4 CARACTERES + QTD CARATED INFO_ADD
        if (info_add) {
            qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION + (cid.length + 22 + '0000'.length + info_add.length) //'0000' 4 CARATERES DO ADD INFO, 02+ QTD CHAR INFO_ADD (MELHORAR ESSA PARTE)
        } else {
            qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION + (cid.length + 22) //chave + informações adicionais caso tiver 
        }
        //INFORMAÇÃO PADRÃO
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION_GUI + '14' + 'br.gov.bcb.pix'
        //CODIGO DA CHAVE + QTD CHAR DA CHAVE + CHAVE
        qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION_CID + (cid.length) + cid
        //INFORMAÇAO ADICIONAL
        if (info_add) {
            qrcode += payload.dadosGerais.ID_MERCHANT_ACCOUNT_INFORMATION_DESCRIPTION + this.gerarlength(info_add) + info_add
        }

        //INFORMAÇÃO PADRÃO
        qrcode += payload.dadosGerais.ID_MERCHANT_CATEGORY_CODE + '04' + '0000'
        //INFORMAÇÃO PADRÃO (986 INDICA QUE A MOEDA UTILIZADA É REAIS)
        qrcode += payload.dadosGerais.ID_TRANSACTION_CURRENCY + '03' + '986'
        //VALIDA SE TEM VALOR
        if (value) {
            qrcode += payload.dadosGerais.ID_TRANSACTION_AMOUNT + this.gerarlength(value) + value
        }
        //INFORMAÇÃO PADRÃO
        qrcode += payload.dadosGerais.ID_COUNTRY_CODE + '02' + 'BR'
        qrcode += payload.dadosGerais.ID_MERCHANT_NAME + this.gerarlength(merchant_name) + merchant_name
        qrcode += payload.dadosGerais.ID_MERCHANT_CITY + this.gerarlength(merchant_city) + merchant_city
        qrcode += payload.dadosGerais.ID_ADDITIONAL_DATA_FIELD_TEMPLATE + this.gerarlength(txid + '0000') //txid + 4 caracteres para dar o tamanho certo (melhorar essa parte do codigo) 
        qrcode += payload.dadosGerais.ID_ADDITIONAL_DATA_FIELD_TEMPLATE_TXID + this.gerarlength(txid) + txid
        qrcode += payload.dadosGerais.ID_CRC16 + CR16.getcrc16(qrcode)

        return qrcode
    
    }


}


module.exports = qr_code_estatico