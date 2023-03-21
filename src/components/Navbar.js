import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.abouttext}
              </Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("primary");
              }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("success");
              }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("danger");
              }}
            ></div>

            <div
              className="bg-warning rounded mx-2"
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
              onClick={() => {
                props.togglemode("warning");
              }}
            ></div> */}
          {/* </div> */}
          {/* <htmlhtmlForm classNameName="d-flex" role="search">
            <input
              classNameName="htmlhtmlForm-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button classNameName="btn btn-outline-success" type="submit">
              Search
            </button>
          </htmlhtmlForm> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.togglemode("null");
              }}
            />
            <label className="form-check-label " form="flexSwitchCheckDefault">
              Enable Light Mode
            </label>
          </div>
          {/* <span>&nbsp;</span>
          <button type="button" class="btn btn-success" onClick={props.togglegreenmode}>Green</button>
          <span>&nbsp;</span> */}
          {/* <button type="button" class="btn btn-success">Success</button> */}
          {/* <button type="button" class="btn btn-danger" onClick={props.toggleredmode}>Red</button>.
<span>&nbsp;</span>
<button type="button" class="btn btn-warning" onClick={props.toggleyellowmode}>Yellow</button>
<span>&nbsp;</span>
<button type="button" class="btn btn-info" onClick={props.togglevluemode}>Light Blue</button>
<span>&nbsp;</span> */}
        </div>
      </div>
    </nav>
  );
}
