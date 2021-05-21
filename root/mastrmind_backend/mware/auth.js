const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    try {
        // const jwtToken = req.header("x-auth-token");
        const jwtToken = req.cookies.token;

        if(!jwtToken) {
            return res.status(401).json({ msg: "No auth token, auth denied."});
        }


        const verifyJWT = jwt.verify(jwtToken, process.env.JWT_SECRET);

        if (!verifyJWT) {
            return res.status(401).json({msg: "Token verification failed, auth denied."});
        }
        req.id = verifyJWT.id;

        next();
    } catch (err) {
        return res.status(401).json( {error: err.message} );
    }
  
};

module.exports = auth;