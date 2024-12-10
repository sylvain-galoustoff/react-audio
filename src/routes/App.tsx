import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Category from "./Category/Category";
import Topbar from "../components/Topbar/Topbar";

function App() {
  return (
    <div id="app">
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
