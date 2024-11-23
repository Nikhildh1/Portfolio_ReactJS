import React, { useState, useEffect } from 'react';
import Nikhil from '../../assets/nikhildh1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group';
import './About.css';

const About = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <>
            <CSSTransition in={show} timeout={1000} classNames="fade" appear>
                <div className="container d-flex justify-content-center align-items-center flex-column" style={{ width: '80%' }}>
                    <div className="heading">
                        <h1 className="text-white" style={{ marginTop: '20px' }}>
                            About Me
                        </h1>
                        <hr style={{ color: 'white' }} />
                    </div>
                    <div className="d-flex flex-column flex-md-row w-100 justify-content-evenly p-5" style={{ marginTop: '10px' }}>
                        <div className="d-flex justify-content-center">
                            <img className="mb-4" src={Nikhil} style={{ width: '300px' }} />
                        </div>
                        <div className="d-flex flex-column mt-3" style={{ width: '100%' }}>
                            <p className="text-white" style={{ fontSize: '20px' }}>
                                I am currently pursuing my Bachelor of Engineering (BE) in Computer Science and Engineering (CSE) from Chitkara University, where I am currently in my 7th semester.
                            </p>
                            <p className="text-white" style={{ fontSize: '17px' }}>
                                I am currently an intern at Tata Communications Transformation Services (TCTS), a leading global provider of communications and technology services. During my time here, I have been fortunate to work in a dynamic and challenging environment that has allowed me to sharpen my skills as a Frontend Developer.
                            </p>
                            <p className="text-white" style={{ fontSize: '15px' }}>
                                In this role, I am responsible for developing and maintaining the user-facing components of various web applications, collaborating closely with a talented team of designers, developers, and other stakeholders to ensure that the end-user experience is intuitive, responsive, and visually engaging. My work includes writing clean, maintainable code using modern frontend technologies such as HTML, CSS, JavaScript, and React, among others.
                            </p>
                            <div className="icon d-flex">
                                <a href='https://github.com/Nikhildh1' target='_blank'><FontAwesomeIcon icon={faGithub} size="2x" className="me-3" style={{ color: 'white' }} /></a>
                                <a href='https://www.linkedin.com/in/nikhil-dhawan-219064229/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'white' }} /></a>
                                <a href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fnikhil_dh1%2F&is_from_rle' target='_blank'><FontAwesomeIcon icon={faInstagram} size="2x" className="ms-3" style={{ color: 'white' }} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    );
};

export default About;