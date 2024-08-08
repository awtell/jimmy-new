import group from '../../images/group/2.jpg';

const Overview = () => {
    return (
        <section className="overview pb-0">
            <div className="container">
                <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="overview-left text-center text-lg-start">
                                <div className="overview-title pb-4">
                                    <p className="mb-1 pink">OVERVIEW</p>
                                    <h2 className="mb-2">GET THE LATEST INFO ABOUT <span className="pink">EVENTEN</span></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p className="mb-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                                    <div className="row justify-content-around">
                                        <div className="col-lg-6 col-md-6">
                                            <a>
                                                <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                                                    <div className="event-info-icon text-center">
                                                        <i className="fa fa-map-marker text-white bg-pink rounded-circle me-3"></i>
                                                    </div>
                                                    <div className="location-info">
                                                        <h5 className="mb-1">WHERE</h5>
                                                        <small>Birmingham City Park Hall, London, UK</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <a>
                                                <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                                                    <div className="event-info-icon text-center">
                                                        <i className="fa fa-calendar-o text-white bg-pink rounded-circle me-3"></i>
                                                    </div>
                                                    <div className="time-info">
                                                        <h5 className="mb-1">WHEN</h5>
                                                        <small>Wednesday To Thursday <br /> Apr, 21-25, 2024</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="overview-img">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 p-0">
                                        <div className="container-img-left mb-2">
                                            <div className="img-left-1 float-end w-lg-80">
                                                <img className="mb-2 w-100 rounded" src={group} alt="group-image" />
                                            </div>
                                            <div className="img-left-2">
                                                <img src={group} alt="group-image" className="w-100 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="container-img-right w-lg-75">
                                            <img src={group} alt="group-image" className="w-100 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
