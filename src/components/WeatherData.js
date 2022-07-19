import {useContext} from 'react'
import Context from '../Context/Context';
import moment from "moment"

const WeatherData = () => {
    
  const {weather, city} = useContext(Context)

  const d = new Date();
  const m = moment(d,"DD-MM").add(1,'d').format('LL')

  return (
    <div className="weather-data">
      {moment(d,"DD-MM").format('LL')}
  <p className="weather__tagline">Weather forecast for <span className="weather-data__city">{city}</span></p>  
  <div className="weather-data__box weather-data__today">
    <span className="weather-data__property">
      <p className="weather-data__title">Today</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">Temperature</p>
      <p className="weather-data__value">{weather[0].temp.day.toFixed(1)}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">Humidity</p>
      <p className="weather-data__value">{weather[0].humidity}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">Pressure</p>
      <p className="weather-data__value">{weather[0].pressure}</p>
    </span>
  </div>

  <div className="weather-data__box">
    <span className="weather-data__property">
      <p className="weather-data__title">Tomorrow</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__value">{weather[1].temp.day.toFixed(1)}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__value">{weather[1].humidity}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__value">{weather[1].pressure}</p>
    </span>
  </div>

  <div className="weather-data__box">
    <span className="weather-data__property">
      <p className="weather-data__title">{moment(d,"DD-MM").add(2,'d').format('LL')}</p>
    </span>
    <span className="weather-data__property">
    
      <p className="weather-data__value">{weather[2].temp.day.toFixed(1)}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__value">{weather[2].humidity}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__value">{weather[2].pressure}</p>
    </span>
  </div>
  <div className="weather-data__box">
    <span className="weather-data__property">
      <p className="weather-data__title">{moment(d,"DD-MM").add(3,'d').format('LL')}</p>
    </span>
    <span className="weather-data__property">
    
      <p className="weather-data__value">{weather[3].temp.day.toFixed(1)}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__value">{weather[3].humidity}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__value">{weather[3].pressure}</p>
    </span>
  </div>

  
</div>
  )
}

export default WeatherData