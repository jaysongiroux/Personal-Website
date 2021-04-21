import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img alt='' className="jg_logo" src="./jg_logo.png" />
                    </Link>

                    <div className={'rightContainer my-2 my-lg-0'}>
                        <ul className="navbar-nav ml-auto">
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                    }`}
                                >
                                <Link className="nav-link" to="/">
                                    <div className="number-navbar">00.</div>Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/about" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/about">
                                    <div className="number-navbar">01.</div>About
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/projects" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/projects">
                                    <div className="number-navbar">02.</div>Projects
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/contact" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link" to="/contact">
                                    <div className="number-navbar">03.</div>Contact
                                </Link>
                            </li>

                            <li
                                className={`nav-item resumeContainer ${
                                    props.location.pathname === "/resume" ? "active" : ""
                                    }`}
                            >
                                <Link className="nav-link resume" to="/resume">
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);