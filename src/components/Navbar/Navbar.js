import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectWithMe from '../Connect/ConnectWithMe';
function Navbar() {
    const [showform, setShowform] = useState(false)

    const handleClick = () => {
        setShowform(true)
    }

    const handleCloseform = () => {
        setShowform(false)
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3" data-bs-theme="dark">
                <div className="container-fluid ms-5">
                    <Link className="navbar-brand" to="/">
                        Nikhil Dhawan
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" aria-current="page" to="/about">
                                    About Me
                                </Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" aria-current="page" to="/skills">
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" aria-current="page" to="/projects">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item ms-4">
                                <Link className="nav-link active" aria-current="page" to="/experience">
                                    Experience
                                </Link>
                            </li>
                        </ul>
                        <button className="btn text-white me-5" type="submit" style={{ background: 'linear-gradient(#DA7C25 0.36%, #B023E1 102.06%', borderRadius: '50px', border: 'none' }} onClick={handleClick}>
                            Connect With Me
                        </button>
                    </div>
                </div>
            </nav >

            {showform && <ConnectWithMe onClose={handleCloseform} />}
        </>
    )
}

export default Navbar