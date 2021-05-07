const jwt = require('jsonwebtoken')
require('dotenv/config')

class verifyJWT{

    verify = (req, res, next)=>{
        const token = req.headers['x-acess-token']
        jwt.verify(token, process.env.SECRET, (err, decoded)=>{
            if(err) return res.status(401).json({"auth" : "sem acesso"})

            req.userId = decoded.userId //GUARDAR O USERID POR EXEMPLO PARA USO POSTERIOR
            next()
        })
    }

}

module.exports = verifyJWT