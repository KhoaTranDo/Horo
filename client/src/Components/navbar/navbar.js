import React, { Component } from "react";
// import { MemuItems } from "./menu";
import "./navbar.css";
import { logOut } from "../../action/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
class navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      //   <nav className="NavbarItems">
      //       <h1 className="navbar-logo">HORO<i className="fab fa-react"></i></h1>
      //       <div className="menu-icon" onClick={this.handleClick}>
      //           <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      //       </div>
      //       <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
      //           {MemuItems.map((item, index) => {
      //               return (
      //                   <li key={index}>
      //                       <a className={item.cName} href={item.url}>
      //                       {item.title}
      //                       </a>
      //                   </li>
      //               )
      //           })}
      //       </ul>
      //     {

      //       this.props.isLoggedIn ? (
      //           <div>
      //               <h1>You are Logged in</h1>
      //               <br/>
      //               <Link to ='/'><button onClick={()=>this.props.logOut()}>Login out</button></Link>
      //           </div>
      //       )
      //       :
      //       (
      //           <div>
      //                 <Link to='/register' style={{color:'white'}}><button type="button" className="btn btn-info">Login</button></Link>
      //           </div>
      //       )
      //   }
      //   </nav>
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/#home">HORO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#features">Home</Nav.Link>
              <Nav.Link href="/#pricing">Pricing</Nav.Link>
              <Nav.Link href="/#features">Features</Nav.Link>
              <Nav.Link href="/#pricing">Pricing</Nav.Link>
              
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
                <Nav.Link href="/#deets">More deets</Nav.Link>
            {this.props.isLoggedIn ? (
                <>
             <Nav.Link eventKey={2} href="/#memes">
                Dank memes
              </Nav.Link>
                <Link to="/">
                  <button type="button" className="btn btn-info" onClick={() => this.props.logOut()}>Login out</button>
                </Link>
                </>
            ) : (
                <Link to="/account" style={{ color: "white" }}>
                  <button type="button" className="btn btn-info">
                    Login
                  </button>
                </Link>
            )}
        </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

function mapStateToProps(state) {
    return { isLoggedIn: state.isLoggedIn };
}
export default connect(mapStateToProps, { logOut })(navbar);
