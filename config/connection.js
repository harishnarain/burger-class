// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "harish",
    password: "lanier",
    database: "burgers_db",
  });
}

// The below was used in the local dev environment
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "harish",
//   password: "lanier",
//   database: "burgers_db",
// });

// Make connection.
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
