import React from 'react'
import logoImg from '../assets/dailyart-logo.png'
import fontStyles from '../styles/fontStyles'

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid py-2">
                    <a className={`navbar-brand ${fontStyles.robotoBigBold}`} href="#">
                        <img className='logo-img' src={logoImg} alt="Logo img" /> Design<span className='green-text'>Academy</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <a className="nav-link active" aria-current="page" href="#">Learn More</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link explore-nav" href="#">Explore Course List</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className={`nav-link ${fontStyles.robotoBold}`} href="#">Enroll Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar