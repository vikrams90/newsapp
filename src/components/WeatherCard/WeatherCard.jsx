import { useContext, useEffect } from "react";
import WeatherContext from "../../context/WeatherContext/WeatherContext";
import { fetchWeather } from "../../context/WeatherContext/WeatherApi";

const WeatherCard = () => {
  const { weather, weatherDispatch } = useContext(WeatherContext);
  // console.log(weather.location.name)
   
  const getweather = async () => {
    const data = await fetchWeather("indore");
    console.log(data);
    weatherDispatch({
      type: "GET_WEATHER",
      payload: {
        name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        weather: data.current.condition.text,
        icon: data.current.condition.icon,
      },
    });
  };
  useEffect(() => {
    getweather();
  }, []);
    const h = (weather.temp * 1.8) + "%"
    let w
    if (weather.temp > 40) {
        w = "text-danger"
    }
    else if (weather.temp < 40 && weather.temp > 20) {
        w= "text-warning"
    } else if (weather.temp < 20) {
        w= "text-primary"
    } else {
        w="text-black"
    }
  return (
    <div className='container my-5'>
      <div className='weathercard d-flex align-items-center justify-content-evenly shadow my-3 p-3'>
        <div className='thermameter' style={{height:h}}>
        </div>
        <span className='d-flex align-items-center flex-column'>
          <h1 className={w}>{weather.temp}</h1>
          <h4 className='text-primary'>
            {weather.name + " " + weather.country}
          </h4>
        </span>
        <span className='d-flex align-items-center flex-column'>
          <img className='img-fluid weather-icon' src={weather.icon} alt='' />
          <p>{weather.weather}</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
