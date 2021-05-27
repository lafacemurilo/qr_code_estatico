const express = require('express')
const router = express.Router()



router.get('/users',  (req, res) => {
    "use strict";
    const https = require("https");
    var axios = require("axios");
    var fs = require("fs");
    
    //Insira o caminho de seu certificado .p12 dentro de seu projeto
    var certificado = fs.readFileSync("./homologacao-292999-murilolaface.p12");
    
    //Insira os valores de suas credenciais em desenvolvimento do pix
    var credenciais = {
      client_id: "Client_Id_f374f215e5c261cdb707953fe6c6bd13e79aa2ad",
      client_secret: "Client_Secret_3d712ec1e24a59d73ebabd6b6b74741487fba162",
    };
    
    var data = JSON.stringify({ grant_type: "client_credentials" });
    var data_credentials = credenciais.client_id + ":" + credenciais.client_secret;
    
    // Codificando as credenciais em base64
    var auth = Buffer.from(data_credentials).toString("base64");
    
    const agent = new https.Agent({
      pfx: certificado,
      passphrase: "",
    });
    //Consumo em desenvolvimento da rota post oauth/token
    var config = {
      method: "POST",
      url: "https://api-pix-h.gerencianet.com.br/v2/cob/5e18ee9b-238f-4452-a418-8913cca32bd5",

      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiY2xpZW50SWQiOiJDbGllbnRfSWRfZjM3NGYyMTVlNWMyNjFjZGI3MDc5NTNmZTZjNmJkMTNlNzlhYTJhZCIsImFjY291bnQiOjI5Mjk5OSwiYWNjb3VudF9jb2RlIjoiNDJkODkzNDkzY2NhZGJlOTA0NjYzM2U1MWI0YzU2NDYiLCJzY29wZXMiOlsiY29iLnJlYWQiLCJjb2Iud3JpdGUiLCJnbi5iYWxhbmNlLnJlYWQiLCJnbi5waXguZXZwLnJlYWQiLCJnbi5waXguZXZwLndyaXRlIiwiZ24uc2V0dGluZ3MucmVhZCIsImduLnNldHRpbmdzLndyaXRlIiwicGF5bG9hZGxvY2F0aW9uLnJlYWQiLCJwYXlsb2FkbG9jYXRpb24ud3JpdGUiLCJwaXgucmVhZCIsInBpeC53cml0ZSIsIndlYmhvb2sucmVhZCIsIndlYmhvb2sud3JpdGUiXSwiZXhwaXJlc0luIjozNjAwLCJjb25maWd1cmF0aW9uIjp7Ing1dCNTMjU2IjoidWt5cW5jZmlVb2o0Q2NaZHZ0RU1QYjJNa3ljWjQrUDhLcmkwMTRPb2twQT0ifSwiaWF0IjoxNjIwMDk1NzY4LCJleHAiOjE2MjAwOTkzNjh9.1K_40F8urV2khhavNXJeyII-6MnlziNOZckT0i7QFrQ',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "calendario": {
            "expiracao": 3600
          },
          "devedor": {
            "cpf": "12345678909",
            "nome": "Francisco da Silva"
          },
          "valor": {
            "original": "123.45"
          },
          "chave": "71cdf9ba-c695-4e3c-b010-abb521a3f1be",
          "solicitacaoPagador": "Indagação ao pagador.",
          "infoAdicionais": [
            {
              "nome": "Pagamento em",
              "valor": "Nome da sua empresa"
            },
            {
              "nome": "Número do Pedido",
              "valor": "ID do pedido"
            }
          ]
      }),
      httpsAgent: agent,
      data: data,
    };
    
    axios(config)
      .then(function (response) {
      
         console.log(JSON.stringify(response.data))
        
      })
      .catch(function (error) {
        console.log(error);
      });
    
})

module.exports = router
