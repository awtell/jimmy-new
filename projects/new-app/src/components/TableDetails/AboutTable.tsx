import React from 'react';

const AboutTable = ({ details }: { details: any }) => {
    return (
        <section className="speaker-detail">
            <div className="container">
                <div className="inner-speaker-detail text-center text-md-start">
                    <div className="row gx-md-5 gy-5">
                        <div className="col-lg-7">
                            <div className="speaker-detail-left py-2">
                                <div className="biography">
                                    <h5 className="mb-2">Details</h5>
                                    <p>Capacity: {details.capacity}</p>
                                    <p>Price: {details.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTable;
