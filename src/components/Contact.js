import React from 'react';


export function Contact() {
    return (
        <div className="container purp-text py-3">
            <div className="col-3">
                <p className="h4" id="contact-me">Contact Me</p>
            </div>
            <div className="purp-bg">
                <ul className="list-group contact-info">
                    <li className="list-group-item purp-bg pl-5">Phone Number: 937-831-8424</li>
                    <li className="list-group-item purp-bg pl-5">Email: aaronlosey11@hotmail.com</li>
                    <li className="list-group-item purp-bg pl-5"><a href="https://github.com/AJLosey">Github Profile</a></li>
                    <li className="list-group-item purp-bg pl-5"><a
                        href="https://www.linkedin.com/in/aaron-losey-3b9a3b142/">LinkedIn
                        Profile</a>
                    </li>
                </ul>
            </div>
            <div className="col-12">

            </div>
        </div>
    )
}