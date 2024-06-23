import React from "react";
import { Route, Routes } from "react-router-dom";
import TextForm from "./TextForm";
import About from "./About";
import Navbar from "./Navbar";
import Alert from "./Alert";

const Main = (props) => {
  return (
    <div className="container">
      <Navbar
        title="Textutils"
        About="About Textutils"
        mode={props.mode}
        toggleMode={props.toggleMode}
      />
      <Alert alert={props.alert} />
      <Routes>
        <Route
          path="/Home"
          element={
            <TextForm
              showAlert={props.showAlert}
              title="Enter Text to Analyze"
              mode={props.mode}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Main;
