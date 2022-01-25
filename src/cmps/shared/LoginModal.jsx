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
    if(target === 'login') {
        document.querySelector(".login-modal").classList.remove("hidden");
        document.querySelector(".signup-modal").classList.add("hidden");
      } else {
        document.querySelector(".signup-modal").classList.remove("hidden");
        document.querySelector(".login-modal").classList.add("hidden");
    }
  };

  closeModal = (target) => {
      if(target === 'login') {
        document.querySelector(".user-modal").classList.add("hidden");
      } else {
        document.querySelector(".user-modal").classList.add("hidden");
      }
  }


  render() {
    return (
      <section className="login-signup">
        <section className="login-modal">
          <div className="login-header">
              <button onClick={()=> this.closeModal('login')}> <span>X</span></button>
            <div>
              <h4>Login</h4>
            </div>
            <div></div>
          </div>
          <form action="">
            <div className="login">
              <h3>Welcome to Gobnb</h3>
              <div>
                <input type="text" placeholder="Enter username" />
                <input type="text" placeholder="Enter password" />
              </div>
            </div>
            <button>
              <span>Continue</span>
            </button>
            <div>
              <small>
                Don't have and account?
                <button type="button" onClick={()=> this.handleClick('signup')}>
                  <span>Sign up!</span>
                </button>
              </small>
            </div>
          </form>
        </section>
        <section className="signup-modal hidden">
        <div className="login-header">
              <button onClick={()=> this.closeModal('login')}> <span>X</span></button>
            <div>
              <h4>Sign up</h4>
            </div>
            <div></div>
          </div>
          <form action="">
            <div className="signup">
              <h3>Welcome to Gobnb</h3>
              <div>
                <input type="text" placeholder="Enter full name" />
                <input type="text" placeholder="Enter username" />
                <input type="text" placeholder="Enter email" />
                <input type="text" placeholder="Enter password" />
              </div>
            </div>
            <button>
              <span>Continue</span>
            </button>
            <div>
              <small>
                Already have an account?
                <button type="button" onClick={()=> this.handleClick('login')}>
                  <span>Login!</span>
                </button>
              </small>
            </div>
          </form>
        </section>
      </section>
    );
  }
}
