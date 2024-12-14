
function adminValidator(req, res, next) {
    const user = req.query.user;
    if (user==="admin") {
        return next();
    };
    return res.send('No tienes los permisos necesarios');
};

module.exports = adminValidator;

