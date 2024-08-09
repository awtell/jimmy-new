import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCountUp from './UseCountUp';

interface Feature {
  title: string;
  details: {
    capacity: string;
    price: string;
  };
  icon: string;
}

const generateRandomValues = (): Feature[] => {
  const features: Feature[] = [];
  for (let i = 1; i <= 6; i++) {
    features.push({
      title: `Table ${i}`,
      details: {
        capacity: `${i + 2}`,
        price: `$${i + 3}.00 per hour`
      },
      icon: "fa-address-book-o"
    });
  }
  return features;
};

const FeatureComponent: React.FC = () => {
  const navigate = useNavigate();
  const features = generateRandomValues();

  // Using the custom hook to animate numbers
  const speakersCount = useCountUp(50, 2000);
  const attendanceCount = useCountUp(850, 2000);
  const workshopsCount = useCountUp(10, 2000);
  const journalistsCount = useCountUp(300, 2000);

  const handleBooking = (feature: Feature) => {
    window.scrollTo(0, 0);
    navigate(`/table_detail/${feature.title}`, { state: { capacity: feature.details.capacity, price: feature.details.price } });
  };

  return (
    <section className="feature text-white position-relative z-0 start-0">
      <div className="overlay z-n1"></div>
      <div className="container">
        <div className="feature-inner">
          <div className="counter text-center border-bottom border-white border-opacity-25">
            <div className="inner-counter mb-7">
              <div className="row">
                <div className="col-lg-3 col-md-3 p-2">
                  <div className="counter-box p-2 border-end border-white border-opacity-25">
                    <h1 className="text-white m-0">
                      <span className="num">{speakersCount}</span>
                      <span>+</span>
                    </h1>
                    <p>Speakers</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 p-2">
                  <div className="counter-box p-2 border-end border-white border-opacity-25">
                    <h1 className="text-white m-0">
                      <span className="num">{attendanceCount}</span>
                      <span>+</span>
                    </h1>
                    <p>Attendance</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 p-2">
                  <div className="counter-box p-2 border-end border-white border-opacity-25">
                    <h1 className="text-white m-0">
                      <span className="num">{workshopsCount}</span>
                      <span>+</span>
                    </h1>
                    <p>Workshops</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 p-2">
                  <div className="p-2">
                    <h1 className="text-white m-0">
                      <span className="num">{journalistsCount}</span>
                      <span>+</span>
                    </h1>
                    <p className="mb-0">Journalists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-lists pt-8">
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div
                    className="feature-box py-7 px-6 rounded bg-black bg-opacity-25 text-center"
                    onClick={() => handleBooking(feature)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="feature-box-icon mb-4">
                      <i className={`fa ${feature.icon} text-white bg-pink rounded-circle text-center`}></i>
                    </div>
                    <div className="feature-box-info">
                      <h5 className="text-white mb-2">{feature.title}</h5>
                      <small>
                        {feature.details.capacity}<br />
                        {feature.details.price}
                      </small>
                      <div className="mt-3">
                        <button className="btn btn-primary btn-book-now">Book Now</button>
                      </div>
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

export default FeatureComponent;
