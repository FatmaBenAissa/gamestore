import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch } from "react-redux";
import { editgames } from "../redux/gameslice";

function Editgame({ el, ping, setping }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    image: el.image,
    name: el.name,
    description: el.description,
    price: el.price,
  });
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "pink", color: "white", border: "none" }}
      >
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit game</Modal.Title>
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
                      setedited({ ...edited, image: e.target.value })
                    }
                    placeholder={el.image}
                  />
                </td>
              </tr>
              <tr>
                <td>game name</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      setedited({ ...edited, name: e.target.value })
                    }
                    placeholder={el.name}
                  />
                </td>
              </tr>
              <tr>
                <td>game description</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      setedited({ ...edited, description: e.target.value })
                    }
                    placeholder={el.description}
                  />
                </td>
              </tr>
              <tr>
                <td>game price</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) =>
                      setedited({ ...edited, price: e.target.value })
                    }
                    placeholder={el.price}
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
              dispatch(editgames({ id: el._id, edited }));
              setping(!ping);
              handleClose();
            }}
          >
            edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editgame;
