import BasicTextForm from "./components/hookFormExamples/BasicTextForm";
import InputValidationForm from "./components/hookFormExamples/InputValidationForm";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  return (
    <div className="pageContainer">
      <BasicTextForm />
      <InputValidationForm />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
