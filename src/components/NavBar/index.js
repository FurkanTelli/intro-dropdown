import React from "react";
import "./navbar.css";
import {storage, useContext} from "../Context";
function NavBar() {

  const {toggleBox, setToggleBox , toggleBox2, setToggleBox2, hamburgerMenu, setHamburgerMenu} = useContext(storage);
  const showLinks1 = (e) => {
    e.preventDefault();
    setToggleBox(!toggleBox);
  };
  
  const activeHamburger = (e) => {
    e.preventDefault();
    setHamburgerMenu(!hamburgerMenu);
  };

  const showLinks2 = (e) => {
    e.preventDefault();
    setToggleBox2(!toggleBox2);
  };

  return (
    <>
      <div className="navigation">
        <img alt="snap" width="100" src="./images/logo.svg" />
        <div className="nav-left">
          <img
            onClick={activeHamburger}
            className={hamburgerMenu === true ? "hamburger-none" : "hamburger-block"}
            width="30"
            alt="icon-hamburger"
            src="./images/icon-menu.svg"
          />
          <div className={hamburgerMenu === false ? "hamburger-block" : "hamburger"}>
            <ul className="navbar-list">
              <li>
                Features
                <img
                  data-value="1"
                  onClick={showLinks1}
                  alt="arrow"
                  width="10"
                  src="./images/icon-arrow-down.svg"
                />
                <div
                  className={
                    toggleBox === true ? "features-block" : "features-none"
                  }
                >
                  <ul className="show-box">
                    <li>
                      <img alt="icon" width="15" src="./images/icon-todo.svg" />
                      Todo List
                    </li>

                    <li>
                      <img alt="icon" width="15" src="./images/icon-calendar.svg" />
                      Calendar
                    </li>

                    <li>
                      <img alt="icon" width="15" src="./images/icon-reminders.svg" />
                      Reminders
                    </li>

                    <li>
                      <img alt="icon" width="15" src="./images/icon-planning.svg" />
                      Planning
                    </li>
                  </ul>
                </div>
              </li>
              <li style={{ padding: "0px 1rem" }}>
                Company
                <img
                  data-value="2"
                  onClick={showLinks2}
                  alt="arrow"
                  width="10"
                  src="./images/icon-arrow-down.svg"
                />
                <div
                  className={
                    toggleBox2 === true ? "company-block" : "company-none"
                  }
                >
                  <ul className="show-box">
                    <li>History</li>

                    <li>Our Team</li>

                    <li>Blog</li>
                  </ul>
                </div>
              </li>
              <li style={{ padding: "0px 2rem 0 1rem" }}>Careers </li>
              <li>About</li>
            </ul>
            <div className="right">
              <button className="login-btn">Login</button>
              <button className="register-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
