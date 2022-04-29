/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://%2Fvar%2Frun%2Fpostgresql/lunchly");

db.connect();

module.exports = db;
