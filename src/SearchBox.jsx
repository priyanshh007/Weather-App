import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';



export default function SearchBox({updateInfo}){
   const API_URL="https://api.openweathermap.org/data/2.5/weather";
   const API_KEY="78bb6af0906c598a989ff107c9f511f5";

   let getWeatherInfo=async(city)=>{
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
   };

    let [city,setCity]=useState("");

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit=async (evt)=>{
        evt.preventDefault();
        console.log(city+"hii");
        setCity("");
        let newinfo=await getWeatherInfo(city);
        updateInfo(newinfo);

    };

    return(<div className="SearchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="contained" type='submit'>
        Search
      </Button>
    </form>
    </div>)
}