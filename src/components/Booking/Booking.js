import React from 'react';
import { useParams } from 'react-router-dom';
import './Booking.css';
import { Link } from 'react-router-dom';
import me from '../../Image/20191003_145821.jpg'


const Booking = (props) => {

    const { id } = useParams();
    const { name, details, location } = props.info[id];




    return (

        <div class="container">
            <div class="details row my-5 py-5">
                <div className="col-md-6 text-light">

                    <h1 className="display-2"> {name}</h1>
                    <p className="lead mt-3">{details}</p>

                </div>

                <div className="col-md-5 ml-md-3">
                    <form action="" className="bookingForm">
                        <div className="form-group">
                            <label for="Origin">Origin</label>
                            <input type="text" id="origin" class="form-control bg-light" value={location} placeholder="Origin" required />
                        </div>
                        <div className="form-group">
                            <label for="Destination">Destination</label>
                            <input type="text" id="destination" class="form-control bg-light" value={name} placeholder="Destination" required />
                        </div>

                        <div className="form-row">
                            <div class="form-group col-md-6">
                                <label for="from">From</label>
                                <input type="date" class="form-control bg-light" required/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="to">To</label>
                                <input type="date" class="form-control bg-light" required/>
                            </div>
                        </div>

                        <Link to={"/hotels/" +  id}>
                            <input className="btn btn-warning col-md-12" type="submit" value="Start Booking"/>
                        </Link>
                    </form>
                </div>
            </div>
            <div className="row mx-auto">
                <div className="col-5 bg-light p-2">
                    <div className="row mx-auto">
                    <div className="col tex-center">
                    <h4 className="tex-center tex-warning">Owner</h4>
                    </div>
                    </div>
                   <div className="row">
                       <div className="col-4">
                       <img style={{width: "150px"}} src={me} alt=""/>
                       </div>
                       <div className="col-8">
                       <h5>Alamgir Shagor</h5>
                        <span>FontEnd Web Developer</span>
                        <br/>
                        <a className="btn btn-warning" href="https://web.facebook.com/Alamgir-H-Shagor-166814413985125" target="_blank" rel="noopener noreferrer">Facebook</a>
                       </div>
                   </div>
                </div>
            </div>


        </div>
    );
};

export default Booking;