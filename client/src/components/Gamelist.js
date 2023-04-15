import React from "react";
import { useSelector } from "react-redux";
import Gamecard from "./Gamecard";

function Gamelist({ ping, setping }) {
  const games = useSelector((state) => state.game?.gameslist);

  return (
    <div className="containerr">
      {games?.map((el) => (
        <Gamecard el={el} ping={ping} setping={setping} />
      ))}
    </div>
  );
}

export default Gamelist;
