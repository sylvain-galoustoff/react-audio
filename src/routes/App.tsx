import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Category from "./Category/Category";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
