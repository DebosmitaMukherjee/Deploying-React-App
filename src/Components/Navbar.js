import React from "react";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              {/* <a className="nav-link" href="#">
                About
              </a> */}
            </div>
          </div>
        </div>
        <div className={`custom-control custom-switch text-${props.theme==='light'?'dark':'light'}`}>
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggleMode}
          />
          <label className="custom-control-label" for="customSwitch1">
            Dark mode
          </label>
        </div>
        <div className={`custom-control custom-switch text-${props.theme==='light'?'dark':'light'}`}>
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggleGreen}
          />
          <label className="custom-control-label" for="customSwitch1">
            Dark Green mode
          </label>
        </div>
      </nav>
    </div>
  );
}
