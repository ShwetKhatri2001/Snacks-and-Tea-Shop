const jwt = require("jsonwebtoken")
const appSecrets = require("../config/appSecrets");

module.exports = (req, res, next) => {
    let decodedToken;
    try {
        const rawToken = req.get('Authorization');
        if (!rawToken) {
            const error = new Error('Not Authenticated');
            error.statusCode = 401;
            throw error
        }
        const token = rawToken.split(' ')[1]
        decodedToken = jwt.verify(token, appSecrets.jwtKey);
    } catch (e) {
        console.error(e)
        e.statusCode = e.statusCode ? e.statusCode : 500;
        throw e
    }
    if (!decodedToken) {
        const error = new Error('Not Authenticated');
        error.statusCode = 401;
        throw error
    }
    const reqIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.remoteAddress = decodedToken.remoteAddress;
    if (req.remoteAddress !== reqIp) {
        const error = new Error('Not Authenticated');
        error.statusCode = 401;
        throw error
    }
    req.uid = decodedToken.uid;
    req.isAdmin = decodedToken.admin;
    req.username = decodedToken.username;
    next();
};