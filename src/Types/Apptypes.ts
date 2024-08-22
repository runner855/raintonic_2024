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