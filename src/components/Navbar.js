
import React from 'react';

export function Navbar({ setContent }) {
    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <span className="navbar-text">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-4">
                                <h1 className="h3">
                                    Portfolio for Aaron Losey
                                </h1>
                            </div>
                            <button type="button" className="col-2 version-box" onClick={() => setContent('About')}>
                                About Me
                            </button>
                            <button type="button" className="col-2 version-box" onClick={() => setContent('Work')}>
                                See My Work
                            </button>
                            <button type="button" className="col-2 version-box" onClick={() => setContent('Contact')}>
                                Contact Me
                            </button>
                            <button type="button" className="col-2 version-box" onClick={() => location.href = 'https://docs.google.com/document/d/1uhSj90kiZ-EfXiE6jyissWxIbGdlgx_zcItK2FqQcow/edit?usp=sharing'}>
                                Resume Link
                            </button>
                        </div>
                    </span>
                </div>
            </nav>
            <div className="col-8 row justify-content-end version-box">

                A. Losey Version 2.7 now comes with ability to code!

            </div>
        </div>
    )
}