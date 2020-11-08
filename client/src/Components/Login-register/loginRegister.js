import React, { Component} from "react";
import "./loginRegister.css";
import { Provider} from "react-redux";
import store from "../../store";
import Register from "./Register";
import Login from "./Login";
import { connect } from "react-redux";

class loginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: "container",
    };
  }

  handleClick = () => {
    if (this.state.animation === "container") {
      this.setState({
        animation: "container right-panel-active",
      });
    } else {
      this.setState({
        animation: "container",
      });
    }
    console.log(this.state.animation);
  };

  render() {
    return (
      <div>
<<<<<<< HEAD
      <video autoPlay muted loop>
        <source src='../'></source>
      </video>
        <Navbar />
=======
>>>>>>> demo1
        <div className={this.state.animation} id="container">
          {/* Register */}
          <Provider store={store}>
            <Register/>
          </Provider>
          {/* Log in */}
          <Login />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={this.handleClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Huy Wibu!</h1>
                <p>
                  Enter your personal details and start find a place for you
                </p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={this.handleClick}git
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          {/* <p>
		Created with <i className="fa fa-heart"></i> by
		<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p> */}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(loginRegister);
