import React from 'react';
import longevity from '../../assets/longevity.png';
import coinspire from '../../assets/coinspire.png';
import weather from '../../assets/weather-app.png';
import quiz from '../../assets/code-quiz.png';

export default function Projects() {
    return (
        <div className="projects">
        <div className="work-container primary-container">
        <a href="https://rocky-thicket-55053.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={longevity} alt="Longevity"/>
        </a>
        <h3>Longevity</h3>
        <p><a href="https://github.com/alexisbenavidez99/workout-tracker">GH</a></p>
        </div>

        <div className="work-container">
            <a href="https://devkjoon.github.io/coinspire/" target="_blank" rel="noreferrer">
                <img src={coinspire} alt="Coinspire"/>
            </a>
            <h3>Coinspire</h3>
            <p><a href="https://github.com/devkjoon/coinspire">GH</a></p>
        </div>

        <div className="work-container">
            <a href="https://alexisbenavidez99.github.io/Weather-App-6/" target="_blank" rel="noreferrer">
                <img src={weather} alt="Weather App"/>
            </a>
            <h3>Weather Forecast App</h3>
            <p><a href="https://github.com/alexisbenavidez99/Weather-App-6">GH</a></p>
        </div>
        
        <div className="work-container">
            <a href="https://alexisbenavidez99.github.io/Code-Quiz-4/" target="_blank" rel="noreferrer">
                <img src={quiz} alt="Code Quiz"/>
            </a>
            <h3>Code Quiz</h3>
            <p><a href="https://github.com/alexisbenavidez99/Code-Quiz-4">GH</a></p>
        </div>
    </div>
    )
}