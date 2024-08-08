import React from 'react';
import partner from '../../images/icon/1.png';

const Partners = () => {
    return (

        <section className="partners">
            <div className="container">
                <div className="partner-inner">
                    <div className="partner-title text-center pb-6 w-lg-60 m-auto">
                        <p className="mb-1 pink">OUR PARTNERS</p>
                        <h2 className="mb-1">SPONSERS AND <span className="pink">PARTNERS</span></h2>
                        <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="partner-img pb-6">
                        <div className="row row-cols-1 row-cols-lg-5 row-cols-md-5">
                            {Array(10).fill(null).map((_, idx) => (
                                <div className="col p-0 border-end border-sm-0" key={idx}>
                                    <div className="p-2 partner-img-box text-center">
                                        <img src={partner} alt="partner-img" className="opacity-75 w-lg-75 w-md-100 w-40" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="partner-button text-center">
                        <a className="btn" href="sponsers.html">VIEW MORE SPONSERS</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
