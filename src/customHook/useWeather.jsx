import { useState } from "react";

const api = {
  key: "124f933039491dbc0ad200f69355eae2",
  base: "https://api.openweathermap.org/data/2.5/",
};

export function useWeather() {
  const [weather, setWeather] = useState(null);   //To store weather data
  const [loading, setLoading] = useState(false);  //To show loading screen
  const [error, setError] = useState(null);        //Error Handling casw

  const fetchWeather = async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`   //fetching data from the api
      );

      if (!response.ok) {
        throw new Error("City not found. Please check the spelling.");    // thrwoing error if response is not found
      }

      const result = await response.json();   // convertin data into json
      setWeather(result);                     //setting weather
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);    //loading finished
    }
  };

  return { weather, loading, error, fetchWeather };
}