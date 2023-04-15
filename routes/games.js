const express = require("express");
const gameRouter = express.Router();
const Game = require("../models/games");
//add game
gameRouter.post("/add", async (req, res) => {
  try {
    let newgame = new Game(req.body);
    let result = await newgame.save();
    res.send({ user: result, msg: "game is added" });
  } catch (error) {
    console.log(error);
  }
});
//get all games
gameRouter.get("/", async (req, res) => {
  try {
    let result = await Game.find();
    res.send({ games: result, msg: "all games" });
  } catch (error) {}
});

//get game by id
gameRouter.get("/:id", async (req, res) => {
  try {
    let result = await Game.findById(req.params.id);
    res.send({ game: result, msg: "one game" });
  } catch (error) {
    console.log(error);
  }
});
//delete game
gameRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Game.findByIdAndDelete(req.params.id);
    res.send({ msg: "game is deleted" });
  } catch (error) {
    console.log(error);
  }
});
//update game
gameRouter.put("/:id", async (req, res) => {
  try {
    let result = await Game.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "game is updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = gameRouter;
