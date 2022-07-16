import { useState } from 'react'
import axios from 'axios'

import Header from './Header'
import Content from './Content'
import WeatherSearch from './WeatherSearch'
import WeatherData from './WeatherData'
import Context from '../Context/Context'





const Main = () => {

    const [weather, setWeather] = useState()

    const api_call = async e => {
        e.preventDefault()

        const API_KEY = 'e4f3ba6fbeba2793e0d23a2bf816e419'
        const url= `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=${API_KEY}&units=metric`

        const request = axios.get(url)
        const response = await request
        setWeather(response.data.daily)
    }

    


  return (
    <div className='main'>
        <Header/>
        <Content>
             
            <Context.Provider value={{api_call, weather}}>

              <WeatherSearch api_call={api_call}/>

              { weather && <WeatherData weather={weather} />}

            </Context.Provider>
            

        </Content>
        
        
    </div>
  )
}

export default Main