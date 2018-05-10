const bcrypt = require("bcryptjs");
const db = require("../db/index");

function createUser (req) {
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(req,body.password, salt);
    return db.none(
        "INSERT INTO users (user_id, user_name, password, email, user_type, user_level, is_veg, good_standing, user_events, needs_training) VALUES(DEFAULT, ${username}, ${password}, ${email}, ${usertype}, ${userlevel}, ${isveg}, ${goodstanding}, ${userevents}, ${needstraining})",
        {
            username: req.body.username,
            password: hash,
            email: req.body.email,
            usertype: req.body.usertype,
            userlevel: req.body.userlevel,
            isveg: req.body.isveg,
            goodstanding: req.body.goodstanding,
            userevent: req.body.userevents,
            needstraining:req.body.needstraining,
        }
    )
}

function loginRequired(req, res, next) {
    if(!req.user) {
        return res.status(401).json({status:"Please log in  first"});
    }
    return next();
}

function comparePassword(username, password) {
    console.log(username);
    return bcrypt.compareSync(username, password);
}


module.exports = {
    createUser,
    loginRequired,
    comparePassword
};