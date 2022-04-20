import React from "react";
import Home from "./Component/Home";
import Frompage from "./FromComponent";
import "./App.css";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Frompage/>
      </div>
    );
  }
}
