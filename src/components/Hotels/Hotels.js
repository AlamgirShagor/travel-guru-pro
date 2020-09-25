import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import hotels from '../fakeData/Hotels';
import * as firebase from "firebase/app";
import "firebase/auth";

import star from '../../Image/Icon/star_1_.png'
import './Hotels.css'
import { UserContext } from '../../App';
const Hotels = (props) => {
    const {id} = useParams();
    const { name } = props.info[id];
   const hotels3 = hotels.slice(0, 3)
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const handleSignOut = () => {
    firebase.auth().signOut()
    .then( res => {
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: ''
        }
        
        setLoggedInUser(signedOutUser);
        
    })
}
    return (

        <div className="container">
            
            <div className="bg p-3">
                <div className="row">
                    <div className="col-6">
                    <h6>252 stays Apr 13-17 3 guests</h6>
                    <h3>Stay in {name}</h3>
                    </div>
                    <div className="col-4">
                        
                        <p>Email: {loggedInUser.email}</p>
                        
                    </div>
                    <div className="col-2">
                        <button className="btn btn-warning" onClick={handleSignOut}>Log out</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6 mr-4">
                        {
                            hotels3.map(hotels => <div className="mb-3">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={hotels.image} className="img-fluid" alt=""/>
                                    </div>
                                    <div className="col-8">
                                        <h5>{hotels.name}</h5>
                                        <br/>
                                        <span>{hotels.details}</span>
                                        <br/>
                                        <span>$/{hotels.price}</span>
                                        <img className="ml-5 star" src={star} alt=""/>
                                        <span>{hotels.review}</span>
                                        
                                        
                                    </div>
                                    
                                </div>
                                <hr/>
                            </div>)
                        }
                    </div>
                    <div className="col-md-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d942076.7403790673!2d91.99089850834979!3d22.728714638170615!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1600876913209!5m2!1sen!2sbd" frameborder="0" style={{width: "100%", height: "100%"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;