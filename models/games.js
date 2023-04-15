const mongoose = require("mongoose");
const schema = mongoose.Schema;

const gameSchema = new schema({
  image: String,
  name: String,
  description: String,
  price: { type: String },
  category: { type: String, default: "action" },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
