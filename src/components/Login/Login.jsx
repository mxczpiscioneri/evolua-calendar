import React, { Component } from "react";
import classNames from "classnames";
import styles from "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.history.push("/calendar");
  }

  render() {
    return (
      <div className={classNames("grid-container content", styles.login)}>
        <div className="grid-row padding-top-xl">
          <div className="grid-xs-8 grid-xs-offset-2">
            <h1 className="text-secondary text-lg">Login</h1>
          </div>
        </div>

        <div className="grid-row">
          <form className="form" onSubmit={this.handleLogin}>
            <div className="grid-xs-8 grid-xs-offset-2 margin-bottom-xl">
              <label htmlFor="email" className="text-sm padding-bottom-xs inline-block text-secondary">E-mail</label>
              <input id="email" className="field text-field-lg" type="email" />
            </div>
            <div className="grid-xs-8 grid-xs-offset-2 margin-bottom-xl">
              <label htmlFor="password" className="text-sm padding-bottom-xs inline-block text-secondary">Password</label>
              <input id="password" className="field text-field-lg" type="password" />
            </div>
            <div className="grid-xs-8 grid-xs-offset-2 margin-bottom-xl">
              <button className="btn-lg btn-primary" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
