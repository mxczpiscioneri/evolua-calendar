import React, { Component } from "react";
import DateTime from "react-datetime";
import "./NewEvent.css";

class NewEvent extends Component {
  state = {};

  render() {
    return (
      <div className="grid-xs-12">
        <div className="grid-row padding-top-xl">
          <div className="grid-xs-10 grid-xs-offset-1">
            <h1 className="text-secondary text-lg">Insert an Event</h1>
          </div>
        </div>

        <div className="grid-row">
          <form className="form" onSubmit={this.doSubmit}>
            <div className="grid-xs-5 grid-xs-offset-1">
              <label htmlFor="description" className="text-sm padding-bottom-xs inline-block text-secondary">Description</label>
              <input className="field text-field-lg" type="text" placeholder="description" />
            </div>
            <div className="grid-xs-3">
              <label htmlFor="datetime" className="text-sm padding-bottom-xs inline-block text-secondary">Date and Time</label>
              <DateTime inputProps={{ className: "field text-field-lg" }} />
            </div>
            <div className="grid-xs-2">
              <label htmlFor="submit" className="text-sm padding-bottom-xs inline-block text-secondary">&nbsp;</label>
              <button className="btn-lg btn-primary" type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewEvent;
