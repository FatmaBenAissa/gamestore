import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addgames } from "../redux/gameslice";
import { useDispatch } from "react-redux";

function Addgame({ ping, setping }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [game, setgame] = useState({
    image: "",
    name: "",
    description: "",
    price: "",
  });
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "pink", color: "white", border: "none" }}
      >
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <table>
              <tr>
                <td>Game image</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      setgame({ ...game, image: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Game name</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setgame({ ...game, name: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>Game description</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      setgame({ ...game, description: e.target.value })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>Game price</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      setgame({ ...game, price: e.target.value })
                    }
                  />
                </td>
              </tr>
            </table>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(addgames(game));
              setping(!ping);
              handleClose();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Addgame;
