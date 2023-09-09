import { Routes, Route } from "react-router-dom";
import Langing from "./components/Landing";
import SingleBlogs from "./components/SingleBlogs";
import CreateBlog from "./components/CreateBlog";
function App() {
  return (
    <div className=" font-Lora">
      <Routes>
        <Route path="/" element={<Langing />} />
        <Route path="/blog/:id" element={<SingleBlogs />} />
        <Route path="/blog/create" element={<CreateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
