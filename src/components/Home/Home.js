import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import fakeData from '../fakeData/fakeData';


const Home = (props) => {

    // const [click, setClick] = useState([]);

    // const handleClick = (e) => {
    //     setClick(e);
    // }

    return (
        <div className="container py-5">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div class="carousel-item active">
                    <div className="row">
                        <div className="col-md-7 d-flex align-items-center text-light">
                            {   
                                <div>
                                    <h1>{fakeData[0].name}</h1>
                                    <p>{fakeData[0].details}</p>
                                    <Link to={"/booking/" + fakeData[0].id}>
                                    <button className="btn btn-warning">Booking <span>	&#8594;</span></button>
                                    </Link>
                                </div>
                            }
                        </div>
                        <div className="col-md-5 d-flex justify-content-end">
                            <img className="img" src={fakeData[0].image} alt=""/>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row">
                    <div className="col-md-7 d-flex align-items-center text-light">
                    {   
                                <div>
                                    <h1>{fakeData[1].name}</h1>
                                    <p>{fakeData[1].details}</p>
                                    <Link to={"/booking/" + fakeData[1].id}>
                                    <button className="btn btn-warning">Booking <span>	&#8594;</span></button>
                                    </Link>
                                </div>
                            }
                    </div>
                    <div className="col-md-5 d-flex justify-content-end">
                    <img className="img" src={fakeData[1].image} alt=""/>
                    </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row">
                        <div className="col-md-7 d-flex align-items-center text-light">
                        {   
                                    <div>
                                        <h1>{fakeData[2].name}</h1>
                                        <p>{fakeData[2].details}</p>
                                        <Link to={"/booking/" + fakeData[2].id}>
                                        <button className="btn btn-warning">Booking <span>	&#8594;</span></button>
                                        </Link>
                                    </div>
                                }
                        </div>
                        <div className="col-md-5 d-flex justify-content-end">
                        <img className="img" src={fakeData[2].image} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
           <div className="sin-box">
                <a className="sine"  href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a className="sine"   href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>    
           </div>
        </div>
        </div>
    );
};

export default Home;