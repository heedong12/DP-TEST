import "./App.css";
import { Route, Routes } from "react-router-dom";
import PhotoDiary from "./pages/PhotoDiary";
import DrawPage from "./pages/DrawPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<DrawPage />} />
      <Route path={"/photodiary"} element={<PhotoDiary />} />
    </Routes>
  );
}

export default App;
