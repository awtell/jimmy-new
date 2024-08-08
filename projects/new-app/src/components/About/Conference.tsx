import React from 'react'

const Conference = () => {
    return (
        <section className="conference">
            <div className="container">
                <div className="conference-inner text-center">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="conference-left ">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 px-2 pt-2">
                                        <div className="event-benifit-list-left mb-4">
                                            <div className="benifit-list-box py-7 px-4 rounded mb-4 box-shadow bg-white">
                                                <div className="list-box-icon">
                                                    <i className="fa fa-users pink mb-3" aria-hidden="true"></i>
                                                </div>
                                                <div className="list-box-body">
                                                    <h5 className="mb-2">Event Conference</h5>
                                                    <p className="mb-2 w-75 m-auto">Duis aute irure dolor in reprehenderit</p>
                                                    <div className="box-btn">
                                                        <a className="p-0 pink" href="event-detail.html">Learn More<i
                                                            className="fa fa-long-arrow-right ms-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                                                <div className="list-box-icon">
                                                    <i className="fa fa-globe pink mb-3" aria-hidden="true"></i>
                                                </div>
                                                <div className="list-box-body">
                                                    <h5 className="mb-2">Culture Leadership</h5>
                                                    <p className="mb-2 w-75 m-auto">Duis aute irure dolor in reprehenderit</p>
                                                    <div className="box-btn">
                                                        <a className="pink p-0" href="event-detail.html">Learn More<i
                                                            className="fa fa-long-arrow-right ms-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 px-2">
                                        <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                                            <div className="list-box-icon">
                                                <i className="fa fa-bar-chart pink mb-3" aria-hidden="true"></i>
                                            </div>
                                            <div className="list-box-body">
                                                <h5 className="mb-2">Digital Marketing</h5>
                                                <p className="mb-2 w-75 m-auto">Duis aute irure dolor in reprehenderit</p>
                                                <div className="box-btn">
                                                    <a className="pink p-0" href="event-detail.html">Learn More<i
                                                        className="fa fa-long-arrow-right ms-2"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="event-benifit-list-right text-lg-start">
                                <div className="overview-title pb-6">
                                    <p className="mb-1 pink">WHY ATTEND CONFERENCE</p>
                                    <h2 className="mb-2">What you’ll discover at <span className="pink">Events</span></h2>
                                </div>
                                <div className="overview-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat.</p>
                                    <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.</p>
                                    <div className="overview-btn">
                                        <a className="btn my-4" href="event-detail.html">Join Event<i className="fa fa-long-arrow-right ms-4"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conference
