import React from 'react'

const EventHistory = () => {
    return (
        <section className="event-history p-0">
            <div className="container">
                <div className="event-history-inner text-center">
                    <div className="event-history-title w-lg-60 m-auto pb-4">
                        <h2 className="mb-1"><span className="pink">Event</span> History</h2>
                        <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="event-history-list text-md-start pb-9">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="event-list-box bg-lightgrey py-7 px-6 rounded mb-4">
                                    <h5 className="mb-4"><a href="event-detail.html" className="black">Digital Marketing Session</a></h5>
                                    <p className="mb-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</small></p>
                                    <div className="time-location">
                                        <ul className="m-0 p-0 d-lg-flex list-unstyled">
                                            <li className="me-2 p-0 m-sm-0"><i className="fa fa-calendar pink me-2" aria-hidden="true"></i><small>April 21, 2019</small></li>
                                            <li><i className="fa fa-thumb-tack pink me-2" aria-hidden="true" ></i><small>Exploration Hall</small></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="event-list-box bg-lightgrey py-7 px-6 rounded mb-4">
                                    <h5 className="mb-4"><a href="event-detail.html" className="black">Designer Expo Meetup 2021</a></h5>
                                    <p className="mb-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</small></p>
                                    <div className="time-location">
                                        <ul className=" m-0 p-0 d-lg-flex list-unstyled">
                                            <li className="me-2 p-0 m-sm-0"><i className="fa fa-calendar pink me-2" aria-hidden="true"></i><small>March 10, 2020</small></li>
                                            <li><i className="fa fa-thumb-tack pink me-2" aria-hidden="true" ></i><small>Exploration Hall</small></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="event-list-box bg-lightgrey py-7 px-6 rounded mb-4">
                                    <h5 className="mb-4"><a href="event-detail.html" className="black">Spokesman in the world 2022</a></h5>
                                    <p className="mb-4"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</small></p>
                                    <div className="time-location">
                                        <ul className="m-0 p-0 d-lg-flex list-unstyled">
                                            <li className="me-2 p-0 m-sm-0"><i className="fa fa-calendar pink me-2" aria-hidden="true"></i><small>Jan 15, 2022</small></li>
                                            <li><i className="fa fa-thumb-tack pink me-2" aria-hidden="true" ></i><small>Exploration Hall</small></li>
                                        </ul>
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

export default EventHistory
