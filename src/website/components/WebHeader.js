import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const WebHeader = (props) => {
    return (
        <div className="headerSection">
            <div className="container-xxl">
                <nav className="navbar navbar-expand-lg navbar-light navbarRow">
                    <div className="d-flex flex-grow-1">
                        <span className="w-100 d-lg-none d-block"></span>
                        <Link to="/">
                            <img className="desktop" src="images/procezo_logo.png" alt="Procezo" title="Procezo" />
                        </Link>
                        <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="/">
                            <img className="mobile" src="images/procezo_logo.png" alt="Procezo" title="Procezo" />
                        </a>
                        <div className="w-100 text-right">
                            <button className="navbar-toggler menuIcon" type="button" data-toggle="collapse" data-target="#myNavbar">
                                <img src="images/Menu.png " alt="Procezo" title="Procezo" />
                            </button>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                        <ul className="navbar-nav ml-auto flex-nowrap topmenu">
                            <li className="nav-item">
                                <Link to="/features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/customers">Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <a target="_blank" href="https://medium.com/procezo-blogs">Blogs</a>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/pricing">Guide</Link>
                            </li> */}
                            <li className="nav-item blueActive">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-item blackActive">
                                <Link to="/signup">
                                    <span>Get Started</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </div>
       
    )
}

export default WebHeader;