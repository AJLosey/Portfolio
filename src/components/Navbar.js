
import React from 'react';

import { MDBBtnGroup, MDBBtn } from 'mdb-react-ui-kit';

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
                            <MDBBtnGroup aria-label='Navigation'>
                                <MDBBtn type="button" className="col-2 version-box" onClick={() => setContent('About')}>
                                    About Me
                                </MDBBtn>
                                <MDBBtn type="button" className="col-2 version-box" onClick={() => setContent('Work')}>
                                    See My Work
                                </MDBBtn>
                                <MDBBtn type="button" className="col-2 version-box" onClick={() => setContent('Contact')}>
                                    Contact Me
                                </MDBBtn>
                                <MDBBtn type="button" className="col-2 version-box" onClick={() => window.location.href = 'https://drive.google.com/file/d/1svmCsDe8Un3r08_XMLwh3i6kywXOHv56/view?usp=sharing'}>
                                    Resume Link
                                </MDBBtn>
                            </MDBBtnGroup>
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