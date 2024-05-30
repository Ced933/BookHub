import Home from "./page/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./page/About/About";
import BaseLayout from "./BaseLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
