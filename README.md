# qr_code_estatico
#end_point : /qr_code_estatico,
#metodo: get,

---------------------------------------------------------------------------
npm start -> inicializar o servidor em prod
npm start dev -> inicializar o nodemon para dev

---------------------------------------------------------------------------

passar por header valores :
cid : 'chave pix' (obrigatório. E se a chave for numero passar o +55) 
merchant_name : 'nome teste'
merchant_city : 'cidade teste'
value : '0.01' (passar valor com ponto)

retorno json : retorno do qr_code_estatico e a imagem desse qr_code em base64. 
---------------------------------------------------------------------------
