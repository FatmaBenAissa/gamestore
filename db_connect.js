const mongosse = require("mongoose");

const db_connect = async () => {
  try {
    let result = await mongosse.connect(process.env.DB_URI);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = db_connect;
