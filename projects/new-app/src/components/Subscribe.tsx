import React from 'react'

const Subscribe = () => {
    return (
        <section className="subscribe py-4">
            <div className="container">
                <div className="subscribe-content">
                    <div className="row">
                        <div className="col-lg-6 align-self-center ">
                            <div className="sub-left text-center text-lg-start py-2">
                                <h4 className="text-white ">DON'T MISS OUR FUTURE UPDATES! GET SUBSCRIBED TODAY!</h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sub-right py-2">
                                <p className="text-white mb-4 text-center text-lg-start"> Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="row gy-3">
                                    <div className="col-lg-8 col-md-8 ">
                                        <div className="sub-email">
                                            <input type="email" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="sub-button">
                                            <button className="btn btn3 w-100">SUBSCRIBE</button>
                                        </div>
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

export default Subscribe
