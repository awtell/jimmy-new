import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/plugin.css';
import '../../css/default.css';
import '../../css/styles.css';
import '../../icons/font-awesome.min.css';
import Navbar from '../Navbar';
import Banner from './Banner';
import Overview from '../Home/Overview';
import Conference from './Conference';
import Speakers from '../Home/Speakers';
import Ticket from '../Home/Ticket';
import Direction from '../Home/Direction';
import Subscribe from '../Subscribe';
import Footer from '../Home/Footer';

const About: React.FC = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Overview />
            <Conference />
            <Speakers />
            <Ticket />
            <Direction />
            <Subscribe />
            <Footer />
        </>
    );
}

export default About;
