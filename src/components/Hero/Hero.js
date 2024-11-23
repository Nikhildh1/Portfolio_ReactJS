import React, { useState, useEffect } from 'react';
import './Hero.css'
import Boy from '../../assets/Boy.png'
import Navbar from '../Navbar/Navbar'
import ConnectWithMe from '../Connect/ConnectWithMe'
import { CSSTransition } from 'react-transition-group';

function Hero() {
  const [showform, setShowform] = useState(false)
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClick = () => {
    setShowform(true)
  }

  const handleCloseform = () => {
    setShowform(false)
  }

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1BJby4tRaeAfFqPBdTiyC2uuFvJsAZOUf/view?usp=sharing', '_blank')
  }

  return (
    <>
      {/* <Navbar/> */}
      <CSSTransition in={show} timeout={1000} classNames="fade" appear>
        <div className='container d-flex justify-content-center align-items-center flex-column mt-4'>
          <div className='myimage'>
            <img src={Boy} style={{ width: '280px', borderRadius: '50%' }}></img>
          </div>
          <div className='container m-2 d-flex justify-content-center align-items-center flex-column' style={{ width: '70%', textAlign: 'center' }}>
            <h1 className='text-white'><span style={{
              backgroundImage: 'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>I'm Nikhil Dhawan, </span>frontend developer working at TCTS</h1>
            <p className='text-white' style={{ width: '80%' }}>I am currently an intern at Tata Communications Transformation Services (TCTS), where I have the opportunity to work as a Frontend Developer. </p>
            <div className='d-flex mt-2'>
              <button className="btn btn-connect text-white me-3" type="submit" style={{ background: 'linear-gradient(246deg, #DA7C25 0.36%, #B023E1 102.06%', borderRadius: '50px' }} onClick={handleClick}>
                Connect With Me
              </button>
              <button className="btn btn-resume text-white" type="submit" style={{ background: 'linear-gradient(246deg, #DA7C25 0.36%, #B023E1 102.06%', borderRadius: '50px' }} onClick={openResume}>
                Resume
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
      {showform && <ConnectWithMe onClose={handleCloseform} />}

    </>
  )
}

export default Hero