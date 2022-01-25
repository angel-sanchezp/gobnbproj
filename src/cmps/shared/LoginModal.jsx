import { set } from "lodash";
import React from "react";
import { connect } from "react-redux";

export class LoginModal extends React.Component {
  state = {
    modalIsOpen: false,
  };

  componentDidMount() {
    // user info
  }

  handleClick = (target) => {
    if (target === "login") {
      document.querySelector(".login-modal").classList.remove("hidden");
      document.querySelector(".dark-screen").classList.remove("hidden");
      document.querySelector(".signup-modal").classList.add("hidden");
    } else {
      document.querySelector(".signup-modal").classList.remove("hidden");
      document.querySelector(".login-modal").classList.add("hidden");
      document.querySelector(".dark-screen").classList.remove("hidden");
    }
  };

  closeModal = (target) => {
    if (target === "login") {
      document.querySelector(".user-modal").classList.add("hidden");
      document.querySelector(".dark-screen").classList.add("hidden");
    } else {
      document.querySelector(".user-modal").classList.add("hidden");
      document.querySelector(".dark-screen").classList.add("hidden");
    }
  };

  render() {
    return (
      <section className="login-signup">
        <section className="login-modal">
          <div className="login-header">
            <button onClick={() => this.closeModal("login")}>
              {" "}
              <span>X</span>
            </button>
            <div>
              <h4>Login</h4>
            </div>
            <div></div>
          </div>
          <div className="login">
            <h3>Welcome to Gobnb</h3>
            <form className="login-form" action="">
              <input className="ls" type="text" placeholder="Enter username" />
              <input className="ls" type="password" placeholder="Enter password" />

              <button className="login-btn gradient">
                <span>Continue</span>
              </button>
            </form>
            <div>
              <small>
                Don't have an account?
                <button 
                  type="button"
                  onClick={() => this.handleClick("signup")}>
                  <span>Sign up!</span>
                </button>
              </small>
            </div>
          </div>
        </section>
        <section className="signup-modal hidden">
          <div className="login-header">
            <button onClick={() => this.closeModal("login")}>
              <span>X</span>
            </button>
            <div>
              <h4>Sign up</h4>
            </div>
            <div></div>
          </div>
          <div className="signup">
            <h3>Welcome to Gobnb</h3>
            <form className="login-form" action="">
              <input className="ls" type="text" placeholder="Full name" />
              <input className="ls" type="text" placeholder="Username" />
              <input className="ls" type="email" placeholder="Email" />
              <input className="ls" type="password" placeholder="Password" />
              <button className="login-btn gradient">
                <span>Continue</span>
              </button>
            </form>
            <div>
              <small>
                Already have an account?
                <button  type="button" onClick={() => this.handleClick("login")}>
                  <span>Login!</span>
                </button>
              </small>
            </div>
          </div>
        </section>
      </section>
    );
  }
}
