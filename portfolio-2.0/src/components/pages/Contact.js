import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrMessage('Please enter a valid email address');
            return;
        }
        if (setMessage === ('')) {
            setErrMessage('Please enter a message');
            return;
        }

        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <div className="contact">
            <h1 className="contact-header">Contact Me</h1>
            <div className="mb-3 w-25">
                <label for="name" className="form-label">Name</label>
                <input type="text"
                    className="form-control"
                    name="name"
                    placeholder=""
                    value={name}
                    onChange={handleInputChange}
                />
                <div class="invalid-feedback">
      Please provide your name.
    </div>
            </div>

            <div class="mb-3 w-25">
                <label for="email" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={handleInputChange}
                />
                <div class="invalid-feedback">
      Please provide a vaild email.
    </div>
            </div>
            <div className="mb-3 w-25">
                <label for="message" className="form-label">Message</label>
                <input
                    type="text"
                    className="form-control"
                    value={message}
                    onClick={handleInputChange}
                    style={{
                        lineHeight: '100px'
                    }}
                />
                <div class="invalid-feedback">
      Please provide a message.
    </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-dark" onClick={handleFormSubmit}>Submit</button>
            </div>
            {errMessage && (
                <div>
                    <p className="error-text">{errMessage}</p>
                </div>
            )}
        </div>
    )
}