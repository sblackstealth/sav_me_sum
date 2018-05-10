const passport = require("passport");
const db= require("../db/index");
const localStrategy = require("passport-local").Strategy;
const init = require("./passport");
const authHelpers = require("./helpers");

const options = {};

init();

passpirt.use(
    new localStrategy(options, (user_name, password, done)=> {
        db
            .any("SELECT * FROM users WHERE user_name=$1", [user_name])
            .then(rows => {
                const user = rows[0];
                if(!user) {
                    return done(null, false);
                }
                if (authHelpers.comparePassword(password, user.password)) {
                    let userNoPassword = {user_id: user.user_id, username: user_name}
                    return done(null, userNoPassword);
                } else {
                    return done(null, false);
                }
            })
            .catch(err=>{
                return done(err);
            });
    });
);


module.exports = passport;
