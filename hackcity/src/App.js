import "./App.css";
import Home from "./pages/Home";
import StepOne from "./pages/StepOne"
import StepTwo from "./pages/StepTwo"
import StepThree from "./pages/StepThree"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<StepOne />} />
          <Route path="/stepTwo" element={<StepTwo />} />
          <Route path="/stepThree" element={<StepThree />} />
      
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
