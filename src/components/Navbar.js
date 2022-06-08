
import React from 'react';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <span className="navbar-text">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-4">
                            <h1 className="h3">
                                Portfolio for Aaron Losey
                            </h1>
                        </div>
                        <div className="col-2">
                            <a href="https://drive.google.com/file/d/1_Sa2hdqHL4J_7zCmmWZPTEzb9DD15czZ/view?usp=sharing"
                                target="_blank" rel="noopener noreferrer">Resume Link</a>
                        </div>
                    </div>
                </span>
            </div>
        </nav>
    )
}