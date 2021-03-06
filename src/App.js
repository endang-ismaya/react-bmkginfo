import { useState, useEffect } from 'react';
import { WeatherCardList } from './components/WeatherCardList/WeatherCardList';
import { SearchBox } from './components/SearchBox/SearchBox';
import './App.css';

function App() {
    const [weathers, setWeathers] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        const urlData = 'http://127.0.0.1:8000/weather-forecast';
        fetch(urlData)
            .then((res) => {
                if (res.ok) {
                    res.json();
                } else {
                    return new Error("Can't fetch the site.");
                }
            })
            .then((res) => setWeathers(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleChange = (e) => {
        const city = e.target.value;
        setSearchField(city);
    };

    function search(weathers) {
        return weathers.filter((weather) => weather.city.toLowerCase().includes(searchField.toLowerCase()));
    }

    return (
        <div className="container text-center">
            <h1 className="mt-5">Indonesia Weather Forecast</h1>
            <SearchBox placeholder="search city..." handleChange={handleChange} value={searchField} />
            <WeatherCardList weathers={search(weathers)} />
            <div className="mb-5"></div>
        </div>
    );
}

export default App;
