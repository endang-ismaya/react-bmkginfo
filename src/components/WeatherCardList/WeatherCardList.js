import React from 'react';
import WeatherCard from './WeatherCard';
import './WeatherCardList.css';

export const WeatherCardList = (props) => {
    return (
        <div className="weathercardlist">
            {props.weathers.map((weather) => (
                <WeatherCard key={weather.city} weather={weather} />
            ))}
        </div>
    );
};
