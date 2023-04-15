import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deletegames } from "../redux/gameslice";
import { useDispatch } from "react-redux";
import Editgame from "./Editgame";

function Gamecard({ el, ping, setping }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(deletegames(el._id));
            setping(!ping);
          }}
        >
          x
        </Button>
        <Editgame el={el} ping={ping} setping={setping} />
      </Card.Body>
    </Card>
  );
}

export default Gamecard;
