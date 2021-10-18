import React from 'react'

function WeatherCard(props) {

    const {city, hour, image, temp, wheather } = props.item

    return (
        <div className="card box" style={{width: "18rem"}}>
            <img src={image} className="card-img-top img-fluid mx-auto d-block" alt={wheather} style={{maxWidth: "50%"}}/>
            <div className="card-body">
                <h5 className="card-title text-center">{city}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{hour}</li>
                <li className="list-group-item">{temp}</li>
                <li className="list-group-item">{wheather}</li>
            </ul>
        </div>
    )
}

export default WeatherCard
