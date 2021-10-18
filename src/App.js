import './App.css';
import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';


function App() {

  const [data, setData] = useState([])
  
  useEffect(() => {
    const urlData = "http://127.0.0.1:8000/weather-forecast"
    fetch(urlData).then(res => res.json()).then(res => setData(res.data))
  }, [])


  return (
    <div className="container">
      <h1 className="text-center mt-5">Weather Forecasts</h1>
        <div className="grid">
          {
            data.map(item => <WeatherCard item={item} key={item.city}/>)
          }
        </div>
    </div>
  );
}

export default App;
