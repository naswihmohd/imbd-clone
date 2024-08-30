import { Route, Routes } from "react-router-dom";
import Index from "./Components/Home/Index";
import ImbdVideo from "./Components/ImbdVideo/ImbdVideo";
import MoviesDetail from "./Components/MovieDetail/MoviesDetail";
import CelebrityDetails from "./Components/MovieDetail/CelebrityDetails";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/video/:page/:id" element={<ImbdVideo/>} />
        <Route path="/details/:id" element={<MoviesDetail/>} />
        <Route path="/celebrity/:id" element={<CelebrityDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
