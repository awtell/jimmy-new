import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/plugin.css';
import '../../css/default.css';
import '../../css/styles.css';
import '../../icons/font-awesome.min.css';
import Navbar from '../Navbar';
import Banner from './Banner';
import Overview from './Overview';
import Partners from './Partners';
import Feature from './Feature';
import Speakers from './Speakers';
import Ticket from './Ticket';
import Schedules from './Schedules';
import Gallery from './Gallery';
import Testimonial from './Testimonial';
import Faq from './Faq';
import Blog from './Blog';
import Footer from './Footer';
import About from '../About/About';
import Direction from './Direction';
import Subscribe from '../Subscribe';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Overview />
      <Partners />
      <Feature />
      <Speakers />
      <Ticket />
      <Schedules />
      <Gallery />
      <Testimonial />
      <Faq />
      <Direction />
      <Blog />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Homepage;
