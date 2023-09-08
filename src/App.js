import { Routes, Route } from "react-router-dom";
import Langing from "./components/Landing";
import SingleBlogs from "./components/SingleBlogs";
function App() {
  return (
    <div className=" font-Lora">
      <Routes>
        <Route path="/" element={<Langing />} />
        <Route path="/blog/:id" element={<SingleBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
