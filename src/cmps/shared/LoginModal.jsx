import { set } from "lodash";
import React from "react";
import { connect } from "react-redux";

import { login, signup, update } from "../../store/user/user.actions.js";

class _LoginModal extends React.Component {
  state = {
    credentials: {
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value = ev.target.value;
    console.log(field, value)
    this.setState({
      credentials: { ...this.state.credentials, [field]: value },
    });
  };

  onLogin = async (ev = null) => {
    if (ev) ev.preventDefault();
    if (!this.state.credentials.email || !this.state.credentials.password)
      return;
    try {
      let user = await this.props.login(this.state.credentials);
      if (user) {
        this.props.history.push("/");
      }
    } catch (err) {
      console.log("error:", err);
    }
    this.resetState();
  };

  onSignup = (ev = null) => {
    if (
      !this.state.credentials.fullname ||
      !this.state.credentials.username ||
      !this.state.credentials.email ||
      !this.state.credentials.password
    )
      return;

    if (ev) ev.preventDefault();

    try {
      const user = this.props.signup(this.state.credentials);
      this.props.history.push("/");
    } catch (err) {
      console.log("error:", err);
    }
    this.resetState();
  };

  resetState = () => {
    const newState = {
      credentials: {
        fullname: "",
        username: "",
        email: "",
        password: "",
      },
    };
    this.setState({ newState });
  };

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
    const { fullname, username, password, email } = this.state;
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
              <input
                className="ls"
                type="text"
                name="username"
                value={username}
                placeholder="Enter username"
                onChange={this.handleChange}
                required
              />
              <input
                className="ls"
                type="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={this.handleChange}
                required
              />

              <button type="submit" className="login-btn gradient">
                <span>Continue</span>
              </button>
            </form>
            <div>
              <small>
                Don't have an account?
                <button
                  type="button"
                  onClick={() => this.handleClick("signup")}
                >
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
              <input
                className="ls"
                type="text"
                name="fullname"
                value={fullname}
                placeholder="Full name"
                onChange={this.handleChange}
                required
              />
              <input
                className="ls"
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={this.handleChange}
                required
              />
              <input
                className="ls"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
                required
              />
              <input
                className="ls"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
              <button type="submit" className="login-btn gradient">
                <span>Continue</span>
              </button>
            </form>
            <div>
              <small>
                Already have an account?
                <button type="button" onClick={() => this.handleClick("login")}>
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

// function mapStateToProps(state) {
//   return {
//     user: state.userModule.user,
//   };
// }
// const mapDispatchToProps = {
//   login,
//   signup,
//   update,
// };

export const LoginModal = connect(
  // mapStateToProps,
  // mapDispatchToProps
)(_LoginModal);
