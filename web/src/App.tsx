import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Catch from "./pages/catch";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catch" element={<Catch />} />
      </Routes>
    </BrowserRouter>
  );
}
