class crc16 {

     getcrc16(qr_code) {

        //DADOS DEFINIDOS PELO BACEN
        var polinomio = 0x1021;
        var resultado = 0xFFFF;

     qr_code += '6304'
     
        //CHECKSUM
        if (qr_code.length > 0) {
            for (var offset = 0; offset < qr_code.length; offset++) {
                resultado ^= (qr_code.charCodeAt(offset) * 256);
                for (var bitwise = 0; bitwise < 8; bitwise++) {
                    if ((resultado <<= 1) & 0x10000) resultado ^= polinomio;
                    resultado &= 0xFFFF;
                }
            }
        }

    
      return  resultado.toString(16).toUpperCase()
    }

}



module.exports = crc16