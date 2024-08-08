import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../Home/Footer';
import Navbar from '../Navbar';
import Subscribe from '../Subscribe';
import AboutTable from './AboutTable';
import EventHistory from './EventHistory';
import TableBanner from './TableBanner';

const TableDetails = () => {
    const { tableNumber } = useParams();
    const location = useLocation();
    const { capacity, price } = location.state || {};

    return (
        <>
            <Navbar />
            <TableBanner />
            <AboutTable details={{ tableNumber, capacity, price }} />
            <EventHistory />
            <Subscribe />
            <Footer />
        </>
    );
};

export default TableDetails;
