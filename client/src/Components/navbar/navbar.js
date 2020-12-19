import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import {logOut } from "../../action/auth";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import axios from 'axios'
import "./navbar.css";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";

class Navbar extends Component {
  state = {
    isOpen: false,
    // old nav
    clicked: false,
    name: "",
  };
  componentWillMount() {
    const a = localStorage.getItem('token');
    axios
      .get(`http://localhost:6001/account`, {
        "x-auth-token": a,
      })
      .then((respone) => {
        this.setState({
          name: respone.data.name,
        });
      });
  }

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
        <nav className="navbar navbar-expand-sm navbar-dark mb-7 py-2 fixed-top ">
          <div className="container-fluid ">
            <span className="navbar-brand font-weight-bolder">HORO</span>
            <a
              href="void(0)"
              className="navbar-toggler border-0"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <FaAlignRight className="nav-icon" />
              </span>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/contact">
                    Contact
                  </NavLink>
                </li>

                {this.props.isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link" exact to="/room/addroom">
                        My Place
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <MDBIcon icon="user" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default">
                          <MDBDropdownItem>
                          <span>{localStorage.getItem('name')}</span>
                          </MDBDropdownItem>
                          <MDBDropdownItem href="/profile">
                            <span>User Profile</span>
                          </MDBDropdownItem>
                          <MDBDropdownItem href="#!">
                            <span>Your Bookmark</span>
                          </MDBDropdownItem>
                          <Link
                            to="/"
                            onClick={() => {
                              localStorage.clear();
                              this.props.logOut();
                            }}
                          >
                            <MDBDropdownItem href="">
                              <span
                                onClick={() => {
                                  localStorage.clear();
                                  this.props.logOut();
                                }}
                              >
                                Log Out
                              </span>
                            </MDBDropdownItem>
                          </Link>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/account">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
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
