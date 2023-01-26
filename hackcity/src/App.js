import React, { useState} from "react";

import Home from "./pages/Home";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import StepFive from "./pages/StepFive";
import StepSix from "./pages/StepSix";
import ScrollToTop from "./components/ScrollToTop";
import CheckBox from "./components/CheckBox";
import Textarea from "./components/Textarea";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    var text = document.getElementById("message").value || "";

    if (text === "") {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  const handleOption = (e) => {
    const elements = document.getElementsByName("checkbox");
    let checkedCount = 0;
    elements.forEach((element) => {
      if (element.checked) {
        checkedCount++;
      }
    });

    if (checkedCount === 0) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/hire"
              element={
                <StepOne
                  status={status}
                  handleOption={handleOption}
                  handleChange={handleChange}
                />
              }
            />
            <Route
              path="/check"
              element={
                <CheckBox
                  status={status}
                  handleOption={handleOption}
                  setStatus={setStatus}
                />
              }
            />
            <Route
              path="/message"
              element={<Textarea handleChange={handleChange} status={status} />}
            />

            <Route
              path="/step-two"
              element={
                <StepTwo
                  status={status}
                  handleOption={handleOption}
                  setStatus={setStatus}
                />
              }
            />
            <Route
              path="/step-three"
              element={
                <StepThree
                  status={status}
                  handleOption={handleOption}
                  setStatus={setStatus}
                />
              }
            />
            <Route
              path="/step-four"
              element={
                <StepFour
                  status={status}
                  handleOption={handleOption}
                  setStatus={setStatus}
                />
              }
            />
            <Route
              path="/step-five"
              element={
                <StepFive
                  status={status}
                  handleOption={handleOption}
                  setStatus={setStatus}
                />
              }
            />
            <Route
              path="/step-six"
              element={
                <StepSix
                  status={status}
                  handleOption={handleOption}
                  setStatus={setStatus}
                />
              }
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
