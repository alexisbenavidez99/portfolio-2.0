import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav className="navbar bg-body">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#about-me">
                        <p className="name-icon">Alexis</p>
                        <p className="name-icon">Benavidez.</p>
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                href="#about-me"
                                onClick={() => handlePageChange('About')}
                            >About Me
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
            </nav>
        </div>
    )
}