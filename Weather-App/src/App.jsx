import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const name = "Bangkok"
  const apiKey = `ea0f7ec1e41a3f1299a17987305c4bba`
  const [city, setCity] = useState({})
  const[ isLoading,setIsLoading ]= useState(false)

  useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setCity(data)
      setIsLoading(true)
    })
  },[name])

  const convertTemp = (k)=>{
    return (k-273).toFixed()
  }

  return (
    (isLoading && <div className='container'>
        <section>
          <div className="location">
            <h1 className='city'>{city.name}</h1>
            <p className="state">{city.sys.country}</p>
          </div>
          <div className="card">
            <div className="weather">
              <h1>{convertTemp(city.main.temp)}&deg;C</h1>
              <small>Max : {convertTemp(city.main.temp_max)}&deg;C | Min : {convertTemp(city.main.temp_min)}&deg;C</small>
            </div>
            <div className="info">
              <div className="status">{city.weather[0].main}</div>
              <div className="humidity">Humidity :{city.main.humidity}</div>
              <div className="windspeed">Wind Speed : {city.wind.speed}</div>
            </div>
          </div>
        </section>
    </div>)
  )
}

export default App