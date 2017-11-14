import React, { Component } from "react";
import classNames from "classnames";
import Header from "../../Header/Header";
import NewEvent from "../NewEvent/NewEvent";
import Events from "../Events/Events";
import styles from "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="grid-container">
        <Header />
        <div className={classNames("grid-row padding-md", styles.content)}>
          <NewEvent />
          <Events />
        </div>
      </div>
    );
  }
}

export default App;
