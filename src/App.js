import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
// import { BrowserRouter as Router,  Route, Link } from "react-router-dom";
// import {Switch} from "react-router-dom";
// import Alerts from "./Components/Alerts";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");
  const toggleGreen = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#063b14";
      document.title = "TextUtils-(Dark Green Mode)";
    }
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#10274b";
      document.title = "TextUtils-(Dark Mode)";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Hello"
          theme={mode}
          toggleMode={toggleMode}
          toggleGreen={toggleGreen}
        />
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/"> */}
          <div className="container my-3">
          <Textarea heading="Enter your text here" mode={mode} />
        </div>
          {/* </Route>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
