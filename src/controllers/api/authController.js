const jwt = require('../../helpers/jwt')
const controller = {
    reqtoken: (req, res) =>{
        const token = jwt.encode({ isAuthorized: true })
        return res.send({token})
    }
};
module.exports = controller