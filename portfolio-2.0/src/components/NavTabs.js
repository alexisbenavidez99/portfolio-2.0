import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div>
            <ul className="nav">
            <div className="nav-header">
            <h1>Alexis</h1>
            <h1>Benavidez.</h1>
            </div>
                <li className="nav-item">
                    <a
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        href="#about-me"
                        onClick={() => handlePageChange('About')}
                    >About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        href="#projects"
                        onClick={() => handlePageChange('Projects')}
                    >Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                    >Contact Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                    >Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}