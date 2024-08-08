import speaker1 from '../../images/speakers/1.jpg';
import speaker2 from '../../images/speakers/2.jpg';
import speaker4 from '../../images/speakers/4.jpg';

const Testimonial = () => {
  return (
    <section className="testimonial bg-lightgrey">
      <div className="container">
        <div className="section-title w-lg-60 m-auto text-center pb-5">
          <p className="mb-1  pink">OUR TESTIMONIALS</p>
          <h2 className="mb-1">WHAT PEOPLES'S SAYS ABOUT <span className="pink">EVENTEN</span></h2>
          <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>
        </div>
        <div className="slider testimonial-slide">
          <div className="box1 mx-4 p-6 rounded bg-white">
            <div className="testimonial-content position-relative">
              <i className="fa fa-quote-left position-absolute" aria-hidden="true"></i>
              <p className="my-6 position-relative w-md-75 m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="testimonial-bio d-flex align-items-center">
              <img src={speaker1} alt="" className="bio-img me-5 rounded-circle float-start" />
              <div>
                <p className="mb-1 fw-semibold black">DANIEL FRANKIE</p>
                <p>Manager</p>
              </div>
            </div>
          </div>
          <div className="box2 mx-4 p-6 rounded bg-white">
            <div className="testimonial-content position-relative">
              <i className="fa fa-quote-left position-absolute" aria-hidden="true"></i>
              <p className="my-6 position-relative w-md-75 ms-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="testimonial-bio d-flex align-items-center">
              <img src={speaker4} alt="" className="bio-img me-5 rounded-circle float-start" />
              <div>
                <p className="mb-1 fw-semibold black">EMANUEL KELTON</p>
                <p>Planner</p>
              </div>
            </div>
          </div>
          <div className="box3 mx-4 p-6 rounded bg-white">
            <div className="testimonial-content position-relative">
              <i className="fa fa-quote-left position-absolute" aria-hidden="true"></i>
              <p className="my-6 position-relative w-md-75 ms-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="testimonial-bio d-flex align-items-center">
              <img src={speaker2} alt="" className="bio-img me-5 rounded-circle float-start" />
              <div>
                <p className="mb-1 fw-semibold black">ROYLOR HENK</p>
                <p>Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
