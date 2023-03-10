import React from 'react'
import '../pages/Home.css'
import './iconbar.css'
import './hero.css'

//icon imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import {ReactComponent as FirebaseIcon} from "../assets/firebase.svg"

//media imports
import muratoneWeb from '../assets/muratone.png'

export default function Hero1() {
  return (
    <div className="container SectionDiv ScrollSnapStart">
        <div className="row">
            <div className="col-lg-6 col-12 my-auto text-lg-start text-center HeroLeftDetails">
                <div className="ps-0 ps-lg-5 mt-3">
                    <h3>muratone.com</h3>
                    <div className="mt-">
                    <FontAwesomeIcon className="icon-item me-2" icon={faReact} />
                    <FontAwesomeIcon className="icon-item mx-2" icon={faBootstrap}/>
                    <FirebaseIcon className="external-icon mx-2 icon-item"/>
                    </div>
                    <p className="mt-3"> DJ profile website with Firebase Authentication <br /> and integrated LinkTree component</p>
                    <a href="https://muratone.com/" target="_blank" className="btn btn-md btn-light me-3 greenBtn">visit</a>
                    <a href="https://github.com/GTklr/muratone-react" target="_blank" className="btn btn-md btn-outline-light greenBtn">
                        <FontAwesomeIcon className="me-2" icon={faGithub} size="1x"/> repo
                    </a>
                </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-last order-first px-5 px-lg-0 d-flex">
                <img src={muratoneWeb} className="imageSS img-fluid w-100" />
            </div>
        </div>
    </div>
)
}
