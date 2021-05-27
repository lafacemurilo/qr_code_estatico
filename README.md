# qr_code_estatico
#end_point : /token/oauth
#end_point : /qr_code_estatico
#metodo: POST

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
    "value" : "0.01" (tipo float)
}



retorno 201 json : retorno do qr_code_estatico e a imagem desse qr_code em base64. 
---------------------------------------------------------------------------
