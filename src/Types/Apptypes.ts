export interface DataProps {
  generationtime_ms: number;
  results: CityDataProps[];
}




export interface CityDataProps {
  country:string;
  country_code:string;
  country_id:number;
  id:number;
  latitude:number;
  longitude:number;
  name:string;
  postcodes:string[];
  timezone:string;
}

export interface ForecastCurrentProps {
apparent_temperature:number;
interval:number;
precipitation:number;
relative_humidity_2m:number;
time:string;
weather_code:number;
 wind_direction_10m:number;
 wind_speed_10m:number;

}

export interface ForecastCurrentUnitsProps{
apparent_temperature:string;
interval:string;
precipitation:string;
relative_humidity_2m:string;
time:string;
weather_code:string;
 wind_direction_10m:string;
 wind_speed_10m:string;
}

export interface ForecastHourlyProps {
  temperature_2m:number[];
  time:string[];
}

export interface ForecastHourlyUnitsProps {
  temperature_2m:string;
  time:string;
}

export interface ForecastProps {
  current:ForecastCurrentProps;
  current_units:ForecastCurrentUnitsProps;
  elevation:number;
  generationtime_ms:number;
  hourly:ForecastHourlyProps;
  hourly_units:ForecastHourlyUnitsProps;
  latitude:number;
  longitude:number;
  timezone:string;
  timezone_abbreviation:string;
  utc_offset_seconds:number;
}