
const { Pool } = require("pg");
require("dotenv").config();

// const pool = new Pool({
//   user: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   host: process.env.HOST,
//   port: process.env.DBPORT,
//   database: "todoapp",
//   ssl: true,
// });
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

module.exports = pool;

// const pool = new Pool({
//   user: "docker",
//   password: "12345",
//   database: "postgres",
//   host: 'db',
//   port: 5432
// });

// module.exports = pool;

// const pool = new Pool({
//   user: "seyyednavidhejazijouybari",
//   password: "kameli123@A",
//   database: "dailydeeds",
//   host: 'localhost',
//   port: 5432
// });

// module.exports = pool;





