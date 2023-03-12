import React from 'react';  

export default function Projects() {
    return (
        <div className="projects">
        <div className="work-container primary-container">
        <a href="https://rocky-thicket-55053.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="portfolio-2.0/src/assets/longevity.png" alt="Longevity"/>
        </a>
        <h3>Longevity</h3>
        </div>

        <div className="work-container">
            <a href="https://joonkidk.github.io/coinspire/" target="_blank" rel="noreferrer">
                <img src="../../assets/coinspire.png" alt="Coinspire"/>
            </a>
            <h3>Coinspire</h3>
        </div>

        <div className="work-container">
            <a href="https://alexisbenavidez99.github.io/Weather-App-6/" target="_blank" rel="noreferrer">
                <img src="../../assets/weather-app.png" alt="Weather App"/>
            </a>
            <h3>Weather Forecast App</h3>
        </div>
        
        <div className="work-container">
            <a href="https://alexisbenavidez99.github.io/Code-Quiz-4/" target="_blank" rel="noreferrer">
                <img src="../../assets/code-quiz.png" alt="Code Quiz"/>
            </a>
            <h3>Code Quiz</h3>
        </div>
    </div>
    )
}