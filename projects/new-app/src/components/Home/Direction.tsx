import thumbnail1 from '../../images/thumbnail/1.jpg';
import thumbnail4 from '../../images/thumbnail/4.jpg';
import thumbnail7 from '../../images/thumbnail/7.jpg';
const Direction = () => {
    return (
        <section className="direction pb-0">
            <div className="container">
                <div className="section-title text-center pb-2 w-lg-60 m-auto">
                    <p className="mb-1  pink">REACH US</p>
                    <h2 className="mb-1">GET DIRECTION TO THE <span className="pink">EVENT HALL</span></h2>
                    <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                </div>
                <div className="direction-content">
                    <div className="direction-info">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 px-1">
                                <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink ">
                                    <div className="justify-content-center align-self-center ms-6">
                                        <h5 className="text-white pb-2">EVENT VENUE:</h5>
                                        <p className="pb-5 m-0">Galleria mall conference center</p>
                                        <h5 className="text-white pb-2">ADDRESS:</h5>
                                        <p className="pb-5 m-0">19 By Pass NR, Bali, Indonesia, BC 22196</p>
                                        <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                                        <p className="pb-5 m-0">Booking: (+62) 1919-2020</p>
                                        <a>Get Directions</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 px-1 py-2">
                                <iframe height="400" className="rounded w-100"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="location-gallery">
                        <div id="selector" className="row pt-1 justify-content-center">
                            <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/4.jpg">
                                <a><img src={thumbnail4}className="w-100 rounded" alt="VR Presentation and conference" /></a>
                            </div>
                            <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/7.jpg">
                                <a><img src={thumbnail7} className="w-100 rounded" alt="VR Presentation and conference" /></a>
                            </div>
                            <div className="item col-lg-4 col-md-6 p-1" data-src="images/group/1.jpg">
                                <a><img src={thumbnail1} className="w-100 rounded" alt="VR Presentation and conference" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Direction
