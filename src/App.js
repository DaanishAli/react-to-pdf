import { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ExportPdfComponent from "./ExportPdfComponent ";

const App = ()=> {


    return (
      <div className="App container-fluid ">
        <ExportPdfComponent/>
      </div>
    );
 
}
export default App;