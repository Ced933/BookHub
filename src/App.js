import Home from "./page/Home/Home";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import NowPlay from "./page/Nowplay/NowPlay";
import BaseLayout from "./BaseLayout";
import MovieDetails from "./page/MovieDetails/MovieDetails";
import Popular from "./page/Popular/Popular";
import TopRated from "./page/TopRated/TopRated";
import UpComing from "./page/UpComing/UpComing";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/nowplaying" element={<NowPlay />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/profil/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
