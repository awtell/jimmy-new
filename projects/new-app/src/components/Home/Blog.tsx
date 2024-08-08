import group4 from '../../images/group/4.jpg'
import group6 from '../../images/group/6.jpg'
import group7 from '../../images/group/7.jpg'

const Blog = () => {
    return (

        <section className="blog">
            <div className="container">
                <div className="blog-inner">
                    <div className="row align-items-center">
                        <div className="col-lg-6  ">
                            <div className="blog-title text-center text-lg-start p-2">
                                <p className="mb-1 pink">RECENT NEWS</p>
                                <h2 className="mb-1">READ MY <span className="pink">NEWS </span>TO KNOW MORE</h2>
                                <p className="mb-0">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-lg-6  p-2">
                            <div className="blog-button text-center text-lg-end">
                                <a className="btn" href="news-list.html">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="row">
                            <div className=" col-lg-4 p-4 pb-0">
                                <div className="blog-box border border-1 rounded pb-2 text-center ">
                                    <a href="news-single.html"><img className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                                        src={group6} alt="blog-img" /></a>
                                    <h5 className="p-4"><a href="news-single.html" className="black">THE TOP MUSIC FESTIVAL IN NEW YORK CITY</a>
                                    </h5>
                                    <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do</small></p>
                                    <div className="pt-2">
                                        <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4  p-4 pb-0">
                                <div className="blog-box border border-1 rounded pb-2 text-center">
                                    <a href="news-single.html"><img className="blog-img rounded w-100 rounded-bottom-0 h-auto"
                                        src={group7} alt="blog-img" /></a>
                                    <h5 className="p-4"><a href="news-single.html" className="black">LIVE INTERVIEWS FROM CONFERENCE</a></h5>
                                    <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do</small></p>
                                    <div className="pt-2">
                                        <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 p-4 pb-0 ">
                                <div className="blog-box border border-1 rounded pb-2 text-center">
                                    <a href="news-single.html"><img className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                                        src={group4} alt="blog-img" /></a>
                                    <h5 className="p-4"><a href="news-single.html" className="black">REGISTRATION FOR OPENING WORKSHOP</a></h5>
                                    <p className="p-4 pt-0 m-0 border-bottom"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do</small></p>
                                    <div className="pt-2">
                                        <span className="px-4  border-end ">April 3, 2023 </span><span className="px-4">No Comments </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
