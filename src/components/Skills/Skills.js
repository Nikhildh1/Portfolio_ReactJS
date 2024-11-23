import React, { useState, useEffect } from 'react';
import Nikhil from '../../assets/nikhildh1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import CircularBar from './CircularBar';
import { CSSTransition } from 'react-transition-group';

const Skills = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <>
            <CSSTransition in={show} timeout={1000} classNames="fade" appear>
                <div className='container d-flex justify-content-center align-items-center flex-column' style={{ width: '80%' }}>
                    <div className='heading'>
                        <h1 className='text-white' style={{ marginTop: '20px' }}>My Skills</h1>
                        <hr style={{ color: 'white' }}></hr>
                    </div>
                    <div className='d-flex flex-wrap w-100 justify-content-evenly mt-3 gap-5'>
                        <div className="d-flex flex-column text-white justify-content-center align-items-center" style={{ width: '170px', height: '170px' }}>
                            <CircularBar value={80} text="80%" color="#ff5733" />
                            <h5 className='mt-2'>HTML</h5>
                        </div>
                        <div className="d-flex flex-column text-white justify-content-center align-items-center" style={{ width: '170px', height: '170px' }}>
                            <CircularBar value={70} text="70%" color="#ff5733" />
                            <h5 className='mt-2'>CSS</h5>
                        </div>
                        <div className="d-flex flex-column text-white justify-content-center align-items-center" style={{ width: '170px', height: '170px' }}>
                            <CircularBar value={75} text="75%" color="#ff5733" />
                            <h5 className='mt-2'>Javascript</h5>
                        </div>
                        <div className="d-flex flex-column text-white justify-content-center align-items-center" style={{ width: '170px', height: '170px' }}>
                            <CircularBar value={70} text="70%" color="#ff5733" />
                            <h5 className='mt-2'>React.JS</h5>
                        </div>
                    </div>
                    <div className='d-flex flex-wrap w-100 justify-content-evenly gap-5 mt-5'>
                        <div className="d-flex flex-column text-white justify-content-center align-items-center" style={{ width: '170px', height: '170px' }}>
                            <CircularBar value={80} text="80%" color="#ff5733" />
                            <h5 className='mt-2'>Bootstrap</h5>
                        </div>
                        <div className="d-flex flex-column text-white justify-content-center align-items-center" style={{ width: '170px', height: '170px' }}>
                            <CircularBar value={65} text="65%" color="#ff5733" />
                            <h5 className='mt-2'>SpringBoot</h5>
                        </div>
                        <div className="d-flex flex-column text-white justify-content-center align-items-center" style={{ width: '170px', height: '170px' }}>
                            <CircularBar value={60} text="60%" color="#ff5733" />
                            <h5 className='mt-2'>JAVA</h5>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default Skills