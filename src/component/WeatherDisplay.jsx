//Using Props to receive data  {{weatehr}}





function WeatherDisplay({ weather }) {
  // Graceful handling if data isn't ready
  if (!weather) return null;   // if there is no data return null 


  //. Destructuring: 
  const { name, main, weather: details } = weather;

  return (
    <div className="weather-result">
      <h2>{name}</h2>                              {/*shows city name */}
      <div className="icon-temp">
        <img
          src={`https://openweathermap.org/img/wn/${details[0].icon}@2x.png`}  //fetching icom
          alt={details[0].description}
        />
        <p className="temp">{Math.round(main.temp)}°C</p>             {/* showing temp in pure decimal */}
      </div>
      <p className="description">{details[0].main} ({details[0].description})</p>     { /* showing description of weather eg cloud , rain  */}
      <div className="extra-info">
        <span>Humidity: {main.humidity}%</span>
        <span>Feels like: {Math.round(main.feels_like)}°C</span>
      </div>
    </div>
  );
}

export default WeatherDisplay;