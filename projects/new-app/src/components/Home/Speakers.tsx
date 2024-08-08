import speaker from '../../images/speakers/1.jpg';

const Speakers = () => {
    return (
        <section className="speakers">
            <div className="container">
                <div className="speaker-inner">
                    <div className="speaker-title text-center p-2">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="title-content text-lg-start mb-2">
                                    <p className="mb-1 pink">EVENT SPEAKERS</p>
                                    <h2 className="mb-1">MEET OUR <span className="pink">SPEAKERS</span></h2>
                                    <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="speaker-button text-lg-end">
                                    <a className="btn my-2" href="speaker_list.html">VIEW MORE SPEAKERS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sepaker-list text-center text-white">
                        <div className="row">
                            {['1', '2', '3', '4'].map((num) => (
                                <div className="col-lg-3 col-md-6 p-2" key={num}>
                                    <div className="speaker-box position-relative overflow-hidden text-white">
                                        <img className="speaker-image rounded w-100" src={speaker} alt="speaker-image" />
                                        <div className="box-content position-absolute bottom-0 z-1">
                                            <h6 className="speaker-title d-block text-white pb-1">
                                                <a href="speaker_detail.html">GERARDO AMBROSE</a>
                                            </h6>
                                            <span className="speaker-post d-block pb-2">Marketing Expert</span>
                                            <ul className="social-link pb-2 ps-0">
                                                <li className="d-inline-block">
                                                    <a href="#" className="rounded d-block me-1"><i className="fa fa-facebook"></i></a>
                                                </li>
                                                <li className="d-inline-block">
                                                    <a href="#" className="rounded d-block me-1"><i className="fa fa-twitter"></i></a>
                                                </li>
                                                <li className="d-inline-block">
                                                    <a href="#" className="rounded d-block me-1"><i className="fa fa-pinterest-p"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speakers;
