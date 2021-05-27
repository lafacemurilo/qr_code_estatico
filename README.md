<<<<<<< HEAD

# qr_code_estatico
=======
# qr_code_estatico
#end_point : /token/oauth
#end_point : /qr_code_estatico
#metodo: POST
>>>>>>> master

---------------------------------------------------------------------------
npm ci -> instala todas as dependencias
npm start -> inicializar o servidor em prod
npm run dev -> inicializar o nodemon para dev

---------------------------------------------------------------------------

passar por json valores :

{
    "chave" : "chave pix", (obrigatório. E se a chave for numero passar o +55)
    "merchant_name" : "Fulano de tal",
    "merchant_city" : "Cidade tal",
    "value" : "0.01" (tipo float), (esperado ponto e não virgula)
    "info_add" : "informacoes adicionais",
    "txid" : "identificador" (MAX LENGHT 25 CHAR, SENDO NUMEROS E LETRAS)

    OBS: O info_add e a chave disputam o  espaço de 99 caracteres

}



retorno 201 json : retorno do qr_code_estatico e a imagem desse qr_code em base64. 
---------------------------------------------------------------------------
