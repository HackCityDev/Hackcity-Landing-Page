import Home from "./pages/Home";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import StepFive from "./pages/StepFive";
import StepSix from "./pages/StepSix";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<StepOne />} />
          <Route path="/step-two" element={<StepTwo />} />
          <Route path="/step-three" element={<StepThree />} />
          <Route path="/step-four" element={<StepFour />} />
          <Route path="/step-five" element={<StepFive />} />
          <Route path="/step-six" element={<StepSix />} />
      
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
