import axios from "axios";

export default axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});

// https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json
