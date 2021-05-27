const jwt = require('jsonwebtoken')
require('dotenv/config')




class token{

     gerar_token = async(req, res)=>{
         //ter na requisição client id, client_secret
         //verificar se client id e client_secret é valido a partir de uma pesquisa na base

        if (req.body.user == 'user' && req.body.password == 'password'){
            const acess_token = jwt.sign({userId: 1}, process.env.SECRET, {expiresIn: 600 })
            return res.json({ auth: true, acess_token})
        }

        return res.status(401).json({
            "auth" : "não autorizado"
        })

     }

}

module.exports = token
