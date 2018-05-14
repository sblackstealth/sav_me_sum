var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var users = require("./routes/users");

var app = express();
const session = require("express-session");
const passport = require("passport");
// setup for view engine
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "jade");

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(sessions({
    secret: "",
    resave: false,
    saveUninitialized: true
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());

app.get("/isloggedin", function(req, res){
    if(req.session.passport.user) {
        res.status(200).send("loggedIn");
    } else{
        res.status(401).send("User not logged in.");
    }
});

app.use("/", index);
app.use("/users", users);

//catch error 404 and foward to error handler
app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404; 
    next(err);
});

/*error handler*/
app.use(function(err, req, res, next){
    /*set locals, only providing error in development*/
    res.locals.message = err.message;
    res.locals.error = req.app.get("env")=== "development" ? err : {};

    /*render the error page */
    res.status(err.status|| 500);
    res.render("error");
});

module.exports = app;