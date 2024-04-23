import React from 'react'
import '../pages/Home.css'
import './iconbar.css'

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faWordpressSimple, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

//media imports
import clubaldnklWeb from '../assets/clublandkl.png'

export default function Hero9wp() {
  return (
    <div className="container SectionDiv ScrollSnapStart HeroLeftDetails ">
        <div className="row" >
            <div className="col-lg-6 col-12 my-auto projectText text-lg-start text-center">
                <div className="ps-0 ps-lg-5 mt-3">
                    <h3>clublandkl.com</h3>
                    <div className="mt-3">
                        <FontAwesomeIcon className="col icon-item me-2" icon={faHtml5}  />
                        <FontAwesomeIcon className="col icon-item mx-2" icon={faCss3Alt}  />
                        <FontAwesomeIcon className="col icon-item mx-2" icon={faWordpressSimple}  />
                    </div>
                    <p className="mt-3"> Elementor based Event Listing site<br /> with custom wp_queries</p>
                    <p className="col pt-2">Company: ClubdlandKL </p>
                    <a href="https://www.clubdlandkl.com/" target="_blank" className="col-2 btn btn-md btn-light greenBtn">visit</a>
                </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-last order-first px-5 px-lg-0 d-flex">
                <img src={clubaldnklWeb} className="imageSS img-fluid w-100 me-auto" />
            </div>
        </div>
    </div>
)
}
