import React, { Component } from "react";
import classNames from "classnames";
import styles from "./Header.css";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className={classNames("grid-row padding-top-xl padding-bottom-xl", styles.header)}>
        <div className="grid-xs-5 grid-xs-offset-1">
          <h1 className="text-white text-xl">Evolua Calendar</h1>
        </div>
        <div className="grid-xs-5 align-right">
          <p className="padding-top-sm text-sm text-white">
            Matheus Piscioneri |
            <a className={classNames("pointer", styles.logout)}> logout</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
