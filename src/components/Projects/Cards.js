import React from 'react'

const Cards = ({pname, image, link, live, text}) => {
    return (
        <>
            <div className="card card-main mt-2" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." style={{ height: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{pname}</h5>
                    <p className="card-text">
                        {text}
                    </p>
                    <div className='d-flex'>
                        <a href={link} className="btn btn-primary">
                            View On GitHub
                        </a>
                        <a href={live} className="btn btn-primary ms-auto">
                            Live
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards