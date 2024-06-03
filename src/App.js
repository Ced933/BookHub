import Home from "./page/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./page/About/About";
import BaseLayout from "./BaseLayout";
import BookDetails from "./page/BookDetails/BookDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profil/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
