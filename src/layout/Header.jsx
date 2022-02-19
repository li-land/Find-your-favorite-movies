import React from "react";
import logo from "../icon/film-slate.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header-container">
          <div className="header-box">
            <div className="header-logoBox">
              <div className="header__logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="header__title">
                Find your favorite <span>movies</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export { Header };
