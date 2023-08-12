import { Component } from "react";
import "./app.scss";
import Mainapp from "./components/Mainapp";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar">
          <p>Days calculator app</p>
        </div>
        <Mainapp />
      </div>
    );
  }
}
