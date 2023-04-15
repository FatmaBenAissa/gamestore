const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());

const db_connect = require("./db_connect");
db_connect();
app.use(cors());
app.use("/game", require("./routes/games"));
app.use("/commande", require("./routes/commandes"));
app.listen(process.env.PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
