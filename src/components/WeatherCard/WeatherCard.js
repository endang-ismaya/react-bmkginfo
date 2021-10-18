import React from 'react';
import './WeatherCard.css';

function WeatherCard(props) {
    const { city, hour, image, temp, wheather } = props.weather;

    return (
        <div className="card-container">
            <h1 className="fs-1">{city}</h1>
            <img src={image} alt={city} />
            <h2>{temp}</h2>
            <p className="time">{hour}</p>
            <p className="badge rounded-pill bg-light text-dark fs-4 p-3">{wheather}</p>
        </div>
    );
}

export default WeatherCard;
