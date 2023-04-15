const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commandeSchema = new schema({
  nameuser: String,
  game: String,
  status: String,
  price: { type: String },
  date: String,
});

const Commande = mongoose.model("Commande", commandeSchema);

module.exports = Commande;
