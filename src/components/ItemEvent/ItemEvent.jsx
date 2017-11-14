import React, { Component } from "react";

class ItemEvent extends Component {
  state = {};

  render() {
    return (
      <tr>
        <td className="padding-lg">{this.props.event.date}</td>
        <td className="padding-lg">{this.props.event.description}</td>
        <td className="padding-lg align-right">
          <i className="remove invisible text-lg text-red pointer padding-xs" title="Remove activity" onClick={this.removeNode} role="button" tabIndex={0}>&times;</i>
        </td>
      </tr>
    );
  }
}

export default ItemEvent;
