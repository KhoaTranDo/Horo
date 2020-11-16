import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "./navbar.css";
import { logOut } from "../../action/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { MemuItems } from "./menu";

class Navbar extends Component {
  state = {
    isOpen: false,
    // old nav
    clicked: false,
  };
  handleTooggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // Action
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="nav-center" style={{ width: "100%" }}>
            <div className="nav-header">
              <div>
                <h1> HORO </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleTooggle}
                >
                  <FaAlignRight className="nav-icon" />
                </button>
              </div>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              {MemuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
              {this.props.isLoggedIn ? (
                <>
                  <Link to="/">
                    <button onClick={() => this.props.logOut()}>
                      Login out
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/account" style={{ color: "white" }}>
                    <button type="button" className="btn btn-info">
                      Login
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
function mapStateToProps(state) {
  return { isLoggedIn: state.isLoggedIn };
}

export default connect(mapStateToProps, { logOut })(Navbar);
