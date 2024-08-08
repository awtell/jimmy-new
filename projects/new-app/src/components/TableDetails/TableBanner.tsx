import { useParams } from 'react-router-dom';

const TableBanner = () => {
    const { tableNumber } = useParams();

    return (
        <section className="banner page-banner position-relative pb-0">
            <div className="overlay"></div>
            <div className="container">
                <div className="page-title text-center position-relative py-11">
                    <h2 className="text-white">{tableNumber}</h2>
                </div>
            </div>
        </section>
    );
};

export default TableBanner;
