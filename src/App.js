import Home from "./page/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./page/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
