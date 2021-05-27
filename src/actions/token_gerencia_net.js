const { response } = require('../app');
const https = require("https");
var axios = require("axios");
var fs = require("fs");


class token {
    gerar_token() {

        //Insira o caminho de seu certificado .p12 dentro de seu projeto
        var certificado = fs.readFileSync("./certificado.p12");

        //Insira os valores de suas credenciais em desenvolvimento do pix
        var credenciais = {
            client_id: "Client_Id",
            client_secret: "Client_Secret",
        };

        var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;

        // Codificando as credenciais em base64
        var auth = Buffer.from(data_credentials).toString("base64");

        const agent = new https.Agent({
            pfx: certificado,
            passphrase: "",
        });


        return axios({
            method: 'POST',
            url: 'https://api-pix-h.gerencianet.com.br/oauth/token',
            headers: {
              Authorization: 'Basic ' + auth,
              'Content-Type': 'application/json'
            },
            httpsAgent: agent,
            data: {
              grant_type: 'client_credentials'
            }
          });



    }
}

module.exports = token