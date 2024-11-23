import React, { useState, useEffect } from 'react';
import TCTS from '../../assets/TCTS.png'
import { CSSTransition } from 'react-transition-group';
const Experience = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);
    return (
        <>
            <CSSTransition in={show} timeout={1000} classNames="fade" appear>
                <div className='container d-flex flex-column justify-content-center align-items-center'>
                    <div className="heading">
                        <h2 className="text-white" style={{ marginTop: '20px' }}>
                            Experience
                        </h2>
                        <hr style={{ color: 'white' }} />
                    </div>
                    <div className="card mt-5 p-4" style={{ maxWidth: 600 }}>
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={TCTS} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8 d-flex flex-column">
                                {/* <img src={TCTS} className="ms-auto" style={{width:'200px'}}/> */}
                                <div className="card-body">
                                    <h5 className="card-title">Tata Communications Transformation Services - Frontend Developer Intern</h5>
                                    <p className="card-text">
                                        I am currently an intern at TCTS, where I have the opportunity to work as a Frontend Developer.
                                    </p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">October 2024 - Present</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default Experience