import React, { Component } from "react";
import ItemEvent from "../ItemEvent/ItemEvent";
import styles from "./Events.css";

class Events extends Component {
  state = {};

  render() {
    const events = [
      { id: 1, description: "Test event 1", date: "2017/11/14 02:01:00" },
      { id: 2, description: "Test event 2", date: "2017/11/15 03:10:00" },
      { id: 3, description: "Test event 3", date: "2017/11/15 05:46:00" },
    ];

    const eventItems = events.map(function (event) {
      return (
        <ItemEvent
          key={event.id}
          event={event}
        />
      );
    });

    return (
      <div className="grid-xs-12">
        <div className="grid-row padding-top-xl">
          <div className="grid-xs-10 grid-xs-offset-1">
            <table className="table">
              <thead className="table-header text-lg text-darkgray">
                <tr className="bg-gray">
                  <td className="padding-sm">Events</td>
                  <td className="padding-sm">&nbsp;</td>
                  <td className="padding-sm">&nbsp;</td>
                </tr>
              </thead>
              <tbody className="table-body text-sm text-default">
                { eventItems }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
