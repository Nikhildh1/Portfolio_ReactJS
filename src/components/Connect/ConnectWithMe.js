import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import './ConnectWithMe.css';

const ConnectWithMe = ({ onClose }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false,
        formSubmit: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = () => {
        const { firstName, lastName, email, message } = formData;
        let isValid = true;
        let newError = { ...error };

        if (!firstName) {
            newError.firstName = "First name is required.";
            isValid = false;
        } else {
            newError.firstName = false;
        }

        if (!lastName) {
            newError.lastName = "Last name is required.";
            isValid = false;
        } else {
            newError.lastName = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailPattern.test(email)) {
            newError.email = "Please enter a valid email.";
            isValid = false;
        } else {
            newError.email = false;
        }

        if (!message) {
            newError.message = "Message is required.";
            isValid = false;
        } else {
            newError.message = false;
        }

        setError(newError);
        return isValid;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            emailjs
                .sendForm('service_dqw6dap', 'template_8e35p4n', e.target, 'wNHGSoAO-W0KC3eLr')
                .then(
                    (result) => {
                        console.log(result.text);
                        alert("Your message has been sent successfully!");
                        setFormData({
                            firstName: '',
                            lastName: '',
                            email: '',
                            message: ''
                        });
                        onClose();
                    },
                    (error) => {
                        console.log(error.text);
                        alert("Failed to send message. Please try again later.");
                    }
                );
        } else {
            setError((prev) => ({ ...prev, formSubmit: true }));
        }
    };

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1040,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    backdropFilter: 'blur(3px)',
                }}
                onClick={onClose}
            >
                <div
                    className='container d-flex flex-column mt-5'
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        maxWidth: '500px',
                        padding: '20px',
                        border: '2px solid grey',
                        borderRadius: '10px',
                        zIndex: 1050,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='formhead d-flex'>
                        <div>
                            <h2>Contact Us</h2>
                            <p>Please fill this form in a decent manner</p>
                        </div>
                        <div className='icon ms-auto'>
                            <FontAwesomeIcon icon={faXmark} size='2x' onClick={onClose} />
                        </div>
                    </div>
                    <form className="d-flex flex-column p-2" style={{ fontSize: '16px', width: '100%' }} onSubmit={handleSubmit}>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${error.firstName ? 'is-invalid' : ''}`}
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter First Name Here"
                                />
                                {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
                            </div>
                            <div className="mb-3 ms-md-auto">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${error.lastName ? 'is-invalid' : ''}`}
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Last Name Here"
                                />
                                {error.lastName && <div className="invalid-feedback">{error.lastName}</div>}
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">
                                E-Mail
                            </label>
                            <input
                                type="email"
                                className={`form-control ${error.email ? 'is-invalid' : ''}`}
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter E-mail Id Here"
                            />
                            {error.email && <div className="invalid-feedback">{error.email}</div>}
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                className={`form-control ${error.message ? 'is-invalid' : ''}`}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Leave a comment here"
                            ></textarea>
                            {error.message && <div className="invalid-feedback">{error.message}</div>}
                        </div>
                        <div className="mt-3 d-flex justify-content-center align-items-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        {error.formSubmit && <div className="text-danger mt-2 text-center">Please fill in all fields correctly.</div>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default ConnectWithMe;