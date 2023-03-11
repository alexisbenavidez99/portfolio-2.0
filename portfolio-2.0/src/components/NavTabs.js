import React from 'react';

export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <a
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    href="#about-me"
                    onClick={() => handlePageChange('About')}
                >About
                </a>
            </li>
            <li class="nav-item">
                <a
                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                >Projects
                </a>
            </li>
            <li class="nav-item">
                <a
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                >Contact Me
                </a>
            </li>
            <li class="nav-item">
                <a
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                >Resume
                </a>
            </li>
        </ul>
    )
}