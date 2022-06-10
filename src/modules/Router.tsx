import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cwctboy_devlog" element={<Blog />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router;