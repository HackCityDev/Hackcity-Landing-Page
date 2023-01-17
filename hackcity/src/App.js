import "./App.css";
import Home from "./pages/Home";
import Hire from "./pages/Hire";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<Hire />} />
      
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
