import { useState } from 'react'
import axios from 'axios'

import Header from './Header'
import Content from './Content'
import WeatherSearch from './WeatherSearch'
import WeatherData from './WeatherData'
import Context from '../Context/Context'





const Main = () => {

  

    const [weather, setWeather] = useState()
    const [loc, setLoc] = useState([51,5,-0.12])
    const [city, setCity] = useState('')

    

    const api_call = async e => {
        e.preventDefault()

        const location = e.target.elements.location.value
        setCity(location)

        const API_KEY = 'e4f3ba6fbeba2793e0d23a2bf816e419'

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${API_KEY}`;

        const request = axios.get(url)
        const response = await request
        setLoc([response.data[0].lat,response.data[0].lon])

        const url2= `https://api.openweathermap.org/data/2.5/onecall?lat=${loc[0]}&lon=${loc[1]}&exclude=hourly,minutely&appid=${API_KEY}&units=metric`
        
        const request2 = axios.get(url2)
        const response2 = await request2
        setWeather(response2.data.daily)
        
    }
        
        
    



    

  return (
    <div className='main'>
        <Header/>
        <Content>
             
            <Context.Provider value={{api_call, weather, city}}>

              <WeatherSearch/>

              { weather && <WeatherData weather={weather} />}

            </Context.Provider>
            

        </Content>
        
        
    </div>
  )
}

export default Main