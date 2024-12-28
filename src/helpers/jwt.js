const jwt = require('jsonwebtoken');

function encode(payload) {
    const secret = process.env.JWT_SECRET
    if (!secret) {
        throw new Error('JWT_SECRET is not defined')
    }
    const token = jwt.sign(payload, secret);
    return token;
};
function verify(req) {
  if (req.header && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ')
    
    if (parts.length !== 2) {
        throw new Error('Format is Atuhorization: Bearer')
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        throw new Error(
        'Format is Authorization: Bearer'
        );  
    }
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET, (err) =>{
        if (err) {
            throw new Error(err.message)
        }
    })
    return tokenDecoded
  } else{
    throw new Error('Token not found')
  }
};

module.exports = {
    encode,
    verify
};