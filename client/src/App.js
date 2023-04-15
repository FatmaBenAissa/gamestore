import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbarr from "./components/Navbarr";
import Gamelist from "./components/Gamelist";
import About from "./components/About";
import Contact from "./components/Contact";
import Commandes from "./components/Commandes";
import { Route, Routes } from "react-router-dom";
import { getgames } from "./redux/gameslice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Addgame from "./components/Addgame";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState("");
  useEffect(() => {
    dispatch(getgames());
  }, [ping]);

  return (
    <div className="App">
      <Navbarr />
      <div className="add">
        <Addgame ping={ping} setping={setping} />
      </div>

      <Routes>
        <Route path="/" element={<Gamelist ping={ping} setping={setping} />} />
        <Route path="/commandes" element={<Commandes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
