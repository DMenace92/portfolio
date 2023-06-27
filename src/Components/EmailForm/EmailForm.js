import React, { useState } from 'react';
// import { Grid, Paper } from '@material-ui/core';
import { Grid, Paper } from '@mui/material'
import './EmailForm.css'

//create a react life cycle to handle the state of this form
const componentDidMount = () => {
    //

}

const EmailForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send email)
        console.log('Name', name);
        console.log('Phone', phone);
        console.log('Email:', email);
        console.log('Message:', message);

        // Clear form fields
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');

    };

    return (

        <Grid>
            <div className="contactInfoHolder" >
                <Paper className="contactWrapper" elevation="12">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2 className="contactDesign">Contact Me</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="name"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone:</label>
                            <input
                                type="phone"
                                id="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={handleMessageChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </Paper>
            </div>
        </Grid >

    );
};

export default EmailForm;
