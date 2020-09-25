import React from 'react';
import './Header.css'
import logo from '../../Image/logo-white.png'

const Header = () => {
    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent container">
                <a className="navbar-brand" href="/home">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search your Destination" id="searchBox" />
                    </form>


                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">News <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Destination</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a href="/login" class="btn btn-warning" role="button">Login</a>
                        </li>
                    </ul>

                </div>
            </nav >
        </header >
    );
};

export default Header;