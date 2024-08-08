import thumbnail from '../../images/thumbnail/1.jpg';

const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <div className="galler-inner">
                    <div className="section-title text-center">
                        <div className="row align-items-center">
                            <div className="col-lg-6 pb-2">
                                <div className="title-content text-lg-start">
                                    <p className="mb-1 pink">EVENT GALLERY</p>
                                    <h2 className="mb-1">WAS AN AMAZING <span className="pink">GALLERY</span></h2>
                                    <p className="m-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="speaker-button text-lg-end">
                                    <a className="btn" href="gallery.html">VIEW MORE SHOTS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gallerybox pt-4">
                        <div id="selector1" className="grid row">
                            {['4', '7', '6', '7', '6', '1'].map((num) => (
                                <div className="item grid-item col-lg-4 col-md-6 px-1 mb-2" data-src={`images/group/${num}.jpg`} key={num}>
                                    <a>
                                        <img src={thumbnail} className="w-100 rounded" alt="VR Presentation and conference" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
