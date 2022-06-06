import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import alertify from 'alertifyjs'

export default function Register() {
    const form = useRef();
    const [successfulMsg, setSuccessfulMsg] = useState(true);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d9xy9zm', 'template_pyt3wjc', form.current, 'ezcQdMfLpDTJtVdcN')
            .then((result) => {
                alertify.success('Your message send successfully!').set({ transition: 'pulse', message: 'Transition effect: pulse' });
            }, (error) => {
                alertify.error('Something went wrong!');
            });
    };

    return (
        <div className="regCcontainer">

            <form ref={form} onSubmit={sendEmail} className="formCon">

                <div className="formInputsCon">
                    <h2 className="registerTitle">Contact</h2>
                    <div className="inputsCon">
                        <label className="input-label">Name</label>
                        <input type="text" name="user_name" className="inputs" />
                    </div>

                    <div className="inputsCon">
                        <label className="input-label">Email</label>
                        <input type="email" name="user_email" className="inputs" />
                    </div>

                    <div className="inputsCon">
                        <label className="input-label">Message</label>
                        <textarea name="message" />
                    </div>

                    <input type="submit" value="Send" className="registerSubmit" />

                </div>
            </form>



        </div>
    );
}

