

const Ticket = () => {
    return (
        <section className="ticket position-relative">
            <div className="overlay"></div>
            <div className="container">
                <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
                    <div className="ticket-title">
                        <h5 className="text-white mb-1">LET'S DO IT HURRY</h5>
                        <h1 className="text-white mb-2">HAVEN'T BOOKED YOUR SEAT YET?
                            <span className="spin pink d-inline-block">G</span>
                            <span className="spin pink d-inline-block">E</span>
                            <span className="spin pink d-inline-block">T</span>
                            <span className="spin pink d-inline-block">T</span>
                            <span className="spin pink d-inline-block">I</span>
                            <span className="spin pink d-inline-block">C</span>
                            <span className="spin pink d-inline-block">K</span>
                            <span className="spin pink d-inline-block">E</span>
                            <span className="spin pink d-inline-block">T</span>
                        </h1>
                    </div>
                    <div className="ticket-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="ticket-button">
                            <a className="btn btn1" href="book-now.html">GET TICKETS NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ticket;
