import React, { useState, useEffect } from 'react';
import bannerImage from '../../images/team/4.png';

const Banner = () => {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateCountdown = () => {
            const eventDate = new Date('2024-05-22T00:00:00');
            const now = new Date();
            const difference = eventDate.getTime() - now.getTime();

            if (difference > 0) {
                setCountdown({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const interval = setInterval(calculateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="banner position-relative pb-0">
            <div className="overlay">
            </div>
            <div className="container">
                <div className="inner-banner position-relative text-white ">
                    <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="banner-left text-center pb-lg-5 p-md-0">
                                <div className="banner-image">
                                    <img src={bannerImage} alt="banner-image" className="w-50" /><br />
                                    </div>
                                        <div className="countdown">
                                            <div id="countdown"
                                                className="countdown-inner d-flex w-100 bg-white p-2 rounded-5 justify-content-center box-shadow position-relative z-2">
                                                <div className="time m-auto py-4 ">
                                                    <span id="days" className="lh-1 h1 fw-bold"></span><br />
                                                    <small className="text-secondary">Days</small>
                                                </div>

                                                <div className="time  m-auto py-4">
                                                    <span id="hours" className="lh-1 h1 fw-bold"></span><br />
                                                    <small className="text-secondary">Hours</small>
                                                </div>

                                                <div className="time  m-auto py-4">
                                                    <span id="minutes" className="lh-1 h1 fw-bold"></span><br />
                                                    <small className="text-secondary">Minutes</small>
                                                </div>

                                                <div className="time  m-auto py-4">
                                                    <span id="seconds" className="lh-1 h1 fw-bold"></span><br />
                                                    <small className="text-secondary">Seconds</small>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="banner-right  ms-2 text-center text-lg-start pb-8">
                                    <div className="banner-title pb-3">
                                        <h4 className="text-white pb-3">UPCOMING NEW <span className="pink">EVENT</span> 2023</h4>
                                        <h1 className="text-white">STARTUP <span className="pink">GLOBAL</span> CONFERENCE</h1>
                                    </div>
                                    <div className="banner-event-info pb-3">
                                        <ul className="m-0 ps-0 d-sm-flex justify-content-center justify-content-lg-start list-unstyled">
                                            <li className="pe-2 border-end border-1 border-lightgrey">
                                                <i className="fa  fa-calendar-o pe-1"></i> 22-24 MAY 2024
                                            </li>
                                            <li className="ps-2">
                                                <i className="fa  fa-map-marker pe-1"></i> QUEENBAY MALL 4217 ROAD, USA
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="event-discription">
                                        <p className="pb-4 m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.</p>
                                        <div className="banner-button">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <a className="btn me-3 my-1 w-100" href="book-now.html">PURCHASE TICKET</a>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <a className="btn btn2 my-1 w-100" href="event_list.html">VIEW SCHEDULE</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave overflow-hidden position-absolute w-100 z-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"
                        className="d-block position-relative">
                        <path className="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
              c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
              c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                    </svg>
                </div>
        </section>
    );
};

export default Banner;
