var pgp = require("pg-promise")({});
var connectionstring = "postgres://localhost/savmesumdb";
var db = pgp(connectionstring);
module.exports= db;