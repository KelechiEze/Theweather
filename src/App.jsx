import React, { useState } from 'react';
import axios from 'axios'

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a76decfec975a95c7ae16e61f3c7681d`;

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })

      setLocation('');
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
          value ={location}
          onChange={event =>setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
          onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <p className="bold">{data.main.temp.toFixed()}F</p> : null}
          </div>
          <div className="description">
           {data.weather ? <p>{data.weather [0].main}</p>: null}
          </div>
          <div className="bottom">
            <div className="feels">
              {data.main ? <p claaName="bold">{data.main.feels_like.toFixed()}%</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p>: null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()}MPH</p>: null}
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
