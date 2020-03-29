import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1" style={{height:"100%"}}>
            <a href="/auth/google" style={{height:"100%"}} class="valign-wrapper">
              <img
                style={{ height: "2rem" }}
                alt="Google Sign"
                src={require(`../images/google_login.png`)}
              />
            </a>
          </li>,
          <li key="2" style={{height:"100%"}}>
            <a href="/auth/facebook" style={{height:"100%"}} class="valign-wrapper">
              <img
                style={{ height: "2rem" }}
                alt="Facebook Sign"
                src={require(`../images/fb_login.png`)}
              />
            </a>
          </li>
        ];

      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    // if (!this.props.auth) return false;

    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right" style={{height:"100%"}}>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
