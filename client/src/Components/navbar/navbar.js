import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

import { Button } from "./Button";
import { MemuItems } from "./menu";

export default class Navbar extends Component {
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
                  {this.props.isLoggedIn ? (
                    <>
                      <h1>You are Logged in</h1>
                      <br />
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
              {/* <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li> */}
            </ul>
          </div>
        </nav>
       
      </>
    );
  }
}
