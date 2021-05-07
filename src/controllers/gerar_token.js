const jwt = require('jsonwebtoken')
require('dotenv/config')




class token{

     gerar_token = async(req, res)=>{
         //ter na requisição client id, client_secret
         //verificas se client id e client_secret é valido
         console.log('entrou')
        if (req.body.user == 'murilo' && req.body.password == '1234'){
            console.log('entrou no log')
            const acess_token = jwt.sign({userId: 1}, process.env.SECRET, {expiresIn: 600 })
            return res.json({ auth: true, acess_token})
        }

        return res.status(401).json({
            "auth" : "não autorizado"
        })

     }

}

module.exports = token
