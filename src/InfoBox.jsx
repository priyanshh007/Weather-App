import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <h3>WeatherInfo-{info.weather}</h3>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={INIT_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="div">
                            <div> Temprature: {info.temp}&deg;C </div>
                            <div> Humidity: {info.humidity} </div>
                            <div> Min Temp: {info.tempMin}&deg;C </div>
                            <div> Max Temp: {info.tempMax}&deg;C</div>
                            <p>Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
