import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'
function Weather() {
  const [loc, setLoc] = useState('')
  const [city, setCity] = useState('')
  const [tp , setTp] = useState('')
  const handilCLick=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=5cdf245e98ebcb06639a3371b1a063c0`).then((response) => {
      
      setCity(response.data)
   setTp(city.main.temp)
    });
  }

  const heat = tp-273.15
  return (

    <div className='w-parent'>
      <h1>Today's Weather..!</h1>
      <div className="w-search">
        <input type="text" placeholder='Search for a City..' onChange={(e)=>setLoc(e.target.value)} />
        <i class="fa-solid fa-magnifying-glass" onClick={handilCLick}></i>
      </div>
 
      <div className="w-text">
        <p>{city ? city.name : 'Kalpatta'}</p>
        <h2>{city ? heat.toFixed(2) : "30"} <sup>o</sup> C <i class="fa-solid fa-sun"></i></h2>
        
      </div>
      

      <div className="boxs">
        <div className="box">
            <p>Humidity <i class="fa-solid fa-droplet"></i></p>
            <h2>{city ?  city.main.humidity : "97"}%</h2>
        </div>
        <div className="box">
            <p>Wind Speed <i class="fa-solid fa-wind"></i></p>
            <h2>{city ? city.wind.speed : '0.96'} m/s</h2>
        </div>
        <div className="box">
            <p>Sea Level <i class="fa-solid fa-cloud"></i></p>
            <h2>{city ? city.main.sea_level : '1012'}m </h2>
        </div>
      </div>
    </div>
  )
}

export default Weather
