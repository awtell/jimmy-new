import React from 'react';
import { Link } from 'react-router-dom';

const SpeakerDetails: React.FC = () => {
    return (
        <div>
            <header className="main_header_area position-absolute w-100">
                <div className="header-content text-white">
                    <div className="container">
                        <div className="header-content-inner py-2">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="social-links">
                                        <ul className="m-0 p-0">
                                            <li className="d-inline">
                                                <Link to="#">
                                                    <i className="fa fa-facebook border-social rounded-circle text-center"></i>
                                                </Link>
                                            </li>
                                            <li className="d-inline">
                                                <Link to="#">
                                                    <i className="fa fa-twitter border-social rounded-circle text-center"></i>
                                                </Link>
                                            </li>
                                            <li className="d-inline">
                                                <Link to="#">
                                                    <i className="fa fa-google border-social rounded-circle text-center"></i>
                                                </Link>
                                            </li>
                                            <li className="d-inline">
                                                <Link to="#">
                                                    <i className="fa fa-instagram border-social rounded-circle text-center"></i>
                                                </Link>
                                            </li>
                                            <li className="d-inline">
                                                <Link to="#">
                                                    <i className="fa fa-youtube-play border-social rounded-circle text-center"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="header-event-info text-end">
                                        <ul className="m-0 p-0">
                                            <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline">
                                                <i className="fa fa-phone pe-1"></i>
                                                <small>+33 877 554 332</small>
                                            </li>
                                            <li className="px-2 border-end d-inline border-lightgrey border-opacity-50">
                                                <i className="fa fa-envelope-o pe-1"></i>
                                                <small>info@website.com</small>
                                            </li>
                                            <li className="px-2 d-inline">
                                                <i className="fa fa-clock-o pe-1"></i>
                                                <small>Mon - Fri: 9:00 - 18:30</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_menu" id="header_menu">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg py-2">
                            <div className="row">
                                <div className="col-lg-2 col-md-6">
                                    <div className="navbar-brand m-0">
                                        <img src="images/logo/1.png" alt="Logo" className="w-100" />
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6">
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul className="navbar-nav align-items-center" id="responsive-menu">
                                            <li className="nav-item">
                                                <Link className="nav-link px-2 my-4 py-0 text-white" to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link px-2 my-4 py-0 text-white" to="/about">
                                                    About
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle px-2 my-4 py-0 text-white"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Speaker
                                                </a>
                                                <ul className="dropdown-menu bg-lightgrey p-0 rounded">
                                                    <li>
                                                        <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/speaker-list">
                                                            Speakers List
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/speaker-details">
                                                            Speakers Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* Other Nav Items */}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="menu-search">
                                        <a href="#search1" className="mt_search">
                                            <i className="fa fa-search fa-lg me-5 text-white"></i>
                                        </a>
                                        <a className="btn btn3" href="book-now.html">
                                            Buy Ticket<i className="fa fa-long-arrow-right ms-4"></i>
                                        </a>
                                    </div>
                                </div>
                                <div id="slicknav-mobile"></div>
                            </div>
                        </nav>
                    </div>
                    <div id="search1">
                        <button type="button" className="close">
                            ×
                        </button>
                        <form>
                            <input className="form-control form-control-lg rounded text-white" placeholder="Search..." />
                        </form>
                        <button type="button" className="btn">
                            <i className="fa fa-search text-white" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </header>
            <section className="speaker-details">
                {/* Speaker details content */}
            </section>
        </div>
    );
};

export default SpeakerDetails;
