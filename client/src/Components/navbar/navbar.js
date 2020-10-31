import React, { Component } from "react";
import {MemuItems} from './menu'
import './navbar.css';
import {logOut} from '../../action/auth'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }

  render() {
      return(
          <nav className="NavbarItems">
              <h1 className="navbar-logo">HORO<i className="fab fa-react"></i></h1>
              <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                  {MemuItems.map((item, index) => {
                      return (
                          <li key={index}>
                              <a className={item.cName} href={item.url}>
                              {item.title}
                              </a>
                          </li>
                      )
                  })}
              </ul>
              {
                
                this.props.isLoggedIn ? (
                    <div>
                        <h1>You are Logged in</h1>
                        <br/>
                        <Link to ='/'><button onClick={()=>this.props.logOut()}>Login out</button></Link>
                    </div>
                )
                :
                (
                    <div>
                          <Link to='/register' style={{color:'white'}}><button type="button" className="btn btn-info">Login</button></Link>
                    </div>
                )
            }
          </nav>
      )
  }
}

function mapStateToProps(state){
    return{  isLoggedIn: state.isLoggedIn}
};
export default connect(mapStateToProps,{logOut})(navbar);