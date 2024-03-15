import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState(
        {     city:"Bombay",
                feelsLike: "24.08",
                humidity: 22,
                temp: 22,
                tempMax: 22,
                tempMin: 22,
                weather: "haze",
               
        }
    );

   let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
   }

    return (<div style={{textAlign:"center"}}> 
       <h2>Weather  App by Priyansh Sharma</h2> 
       <SearchBox updateInfo={updateInfo}/>
       <InfoBox info={weatherInfo}/>

    </div>)
}