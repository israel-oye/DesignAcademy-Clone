import React from 'react'
import bannerImg from '../assets/pallete--bg.svg'
import fontStyles from '../styles/fontStyles'


const Banner = () => {
    return (
        <section className='m-5 pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className={`${fontStyles.robotoBigBold} display-5`}>
                            Unleash Your Creativity with <span className='blue-2-text'>Top Design Courses</span> 
                        </h1>
                        <p>
                            Elevate your design skills to new heights with our curated selection of courses, designed to inspire, educate, and empower your creative journey.
                        </p>
                        <div className="row pt-5">
                            <div className="col-4">
                                <h4 className={`blue-3-text ${fontStyles.robotoBold}`}>300+</h4>
                                <p>Courses</p>
                            </div>
                            <div className="col-4">
                            <h4 className={`blue-3-text ${fontStyles.robotoBold}`}>50+</h4>
                                <p>Expert Mentors</p>
                            </div>
                            <div className="col-4">
                            <h4 className={`blue-3-text ${fontStyles.robotoBold}`}>1000+</h4>
                                <p>Hours of Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={bannerImg} alt="" className="banner-img m-auto d-block" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner