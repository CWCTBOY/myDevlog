import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalHeader from "../components/Global/Header";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <GlobalHeader />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Router;