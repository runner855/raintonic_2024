import axios from "axios";

export default axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

//  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"

//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m
