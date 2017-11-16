import React, { Component } from "react";
import Header from "../Header/Header";
import NewEvent from "../NewEvent/NewEvent";
import Events from "../Events/Events";

class Calendar extends Component {
  state = {};

  render() {
    return (
      <div className="grid-container">
        <Header />
        <div className="grid-row padding-md content">
          <NewEvent />
          <Events />
        </div>
      </div>
    );
  }
}

export default Calendar;
