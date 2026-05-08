import "./App.css";
import { useWeather } from "./customHook/useWeather";
import SearchBar from "./component/SearchBar";
import WeatherDisplay from "./component/WeatherDisplay";


// This is the main file which controls other files
/*
using useWeather we have taken 4 components
*/
function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app-wrapper">
      <header>
        <h1>React Weather App</h1>
      </header>

      <main>
        <SearchBar onSearch={fetchWeather} />     {/* using fetchWeather as prop */}

        {/* Handling different UI states like loading === true if error is there or not */}
        {loading && <p className="status-msg">Fetching weather data...</p>}
        
        {error && <p className="error-msg">{error}</p>}

        {!loading && !error && (
          <WeatherDisplay weather={weather} />
        )}

        {/* WelcomE Message */}
        {!loading && !weather && !error && (
          <p className="status-msg">Search for a city to get started!</p>
        )}
      </main>
    </div>
  );
}

export default App;