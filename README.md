# qr_code_estatico
#end_point : /qr_code_estatico,
#metodo: get,

---------------------------------------------------------------------------
para inicializar o servidor : npm start (o sistema escuta a porta 3000)

---------------------------------------------------------------------------

passar por header valores :
cid : 'chave pix' (obrigatório. E se a chave for numero passar o +55) 
merchant_name : 'nome teste'
merchant_city : 'cidade teste'
value : '0.01' (passar valor com ponto)

retorno json : retorno do qr_code_estatico e a imagem desse qr_code em base64. 
---------------------------------------------------------------------------
