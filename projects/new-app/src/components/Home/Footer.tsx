import footerLogo from '../../images/logo/1.png'
const Footer = () => {
  return (
    <footer className="pt-9 text-center text-white position-relative z-1">
      <div className="overlay z-n1 start-0"></div>
      <div className="container">
        <div className="footer-content w-lg-50 m-auto">
          <div className="footer-logo mb-4 pt-1">
            <a href="/"><img src={footerLogo} className="w-50" alt="footer-logo" /></a>
          </div>
          <div className="footer-disciption border-bottom border-white border-opacity-25 m-auto mb-6">
            <p className=" mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.</p>
            <div className="footer-socials pb-6">
              <ul className="m-0 p-0">
                <li className="d-inline me-2">
                  <a className="d-inline-block rounded-circle bg-white  bg-opacity-25">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="d-inline me-2">
                  <a className="d-inline-block rounded-circle bg-white  bg-opacity-25">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="d-inline me-2">
                  <a className="d-inline-block rounded-circle bg-white  bg-opacity-25">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li className="d-inline me-2">
                  <a className="d-inline-block rounded-circle bg-white  bg-opacity-25">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-menu pb-9">
            <ul className="p-0 m-0">
              <li className="d-inline mx-2"><a href="about"><small>About Event</small></a></li>
              <li className="d-inline mx-2"><a href=""><small>Services</small></a></li>
              <li className="d-inline mx-2"><a href="speaker_list.html"><small>Speakers</small></a></li>
              <li className="d-inline mx-2"><a href="event_list.html"><small>Schedule</small></a></li>
              <li className="d-inline mx-2"><a href="pricing.html"><small>Ticket Pricing</small></a></li>
              <li className="d-inline mx-2"><a href="contact.html"><small>Contact Us</small></a></li>
            </ul>
          </div>
        </div>
        <div className="copyright pb-6 pt-1">
          <small>Copyright &#169;2024 Eventen. All Rights Reserved Copyright</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
