import React,{useState}from 'react';


const api = {
  key:"316913d60fbb6ece66bf294cf11c10de",
  base:"http://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query,setQuery] = useState('')
  const [weather,setWeather] = useState({})

  const search = event => {
    if(event.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result =>{
          setWeather(result)
          setQuery('')
        })
    }
  }

  let today = new Date().toDateString();

  return (
    <div className={(typeof weather.main != "undefined")?((weather.main.temp > 22 )?'App warn':'App clouds'):'App'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search"
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
          />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
                <div className="location-box">
          <div className="location">{weather.name},{weather.sys.country}</div>
            <div className="date">{today}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
          <div className="weather">{weather.weather[0].main}</div>
          </div>
          </div>           
          ) : ('')}
      </main>
    </div>
  );
}

export default App;
