import React, { useState, useEffect } from 'react';
import './Projects.css'
import Cards from './Cards'
import { CSSTransition } from 'react-transition-group';
import TicTacToe from '../../assets/TicTacToe.png'
import Twitter from '../../assets/Twitter.png'
import AWS from '../../assets/AWS.png'
const Projects = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);
    return (
        <>
            <CSSTransition in={show} timeout={1000} classNames="fade" appear>
                <div className='container d-flex flex-column justify-content-center align-items-center'>
                    <div className='heading'>
                        <h2 className='text-white' style={{ marginTop: '20px' }}>My Projects</h2>
                        <hr style={{ color: 'white' }}></hr>
                    </div>
                    <div className='d-flex flex-column flex-md-row gap-4'>
                        <Cards pname="Tic-Tac-Toe" image={TicTacToe} link="https://github.com/Nikhildh1/Tic_Tac_Toe" live="https://onlinetictactoe-game.netlify.app/" text="A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Features player turn switching, win/tie detection, and a reset button." />
                        <Cards pname="Twitter Clone" image={Twitter} link="https://github.com/Nikhildh1/Twitter_Clone" live="https://basic-twitter-clone.netlify.app/" text="A simplified Twitter clone built with HTML, CSS, and JavaScript. Allows users to post tweets, like, and delete them in a responsive interface." />
                        <Cards pname="Website Hosting" image={AWS} link="" live="" text="Deployed a static website using AWS S3 for storage, enabling fast and scalable hosting with a custom domain and secure access." />
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default Projects