import React, { useEffect, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import CitiesApiCall from "../../Api/CitiesApiCall";
import { CityDataProps, DataProps, ForecastProps } from "../../Types/Apptypes";
import ForecastApiCall from "../../Api/ForecastApiCall";
import { Card } from "antd";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaTemperatureFull } from "react-icons/fa6";
import "../SearchBar/SearchBar.css";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [data, setData] = useState<DataProps>();
  const [forecast, setForecast] = useState<ForecastProps>();
  const [favoriteCity, setFavoriteCity] = useState<boolean>(false);
  const [items, setItems] = useState([]);
  const CityLatitude = data?.results[0].latitude.toFixed(2);
  const CityLongitude = data?.results[0].longitude.toFixed(2);

  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    setSearchValue(value);
    searchValue &&
      CitiesApiCall.get(
        `search?name=${searchValue}&count=1&language=en&format=json`,
        {}
      ).then((res) => setData(res.data));

    CityLatitude &&
      CityLongitude &&
      ForecastApiCall.get(
        `forecast?latitude=${CityLongitude}&longitude=${CityLongitude}&forecast_days=7& &current=relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m`,
        {}
      ).then((res) => setForecast(res.data));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  console.log("localStorage", localStorage);

  return (
    <div className="main_container">
      <div className="searchbar_container">
        <Space direction="vertical">
          <Search
            placeholder="search your city here!!"
            onSearch={onSearch}
            enterButton
            allowClear
          />
        </Space>
      </div>
      {forecast && (
        <div className="card">
          <Card style={{ width: 350, height: 320 }}>
            <div className="city">
              <div onClick={() => setFavoriteCity(!favoriteCity)}>
                {favoriteCity ? (
                  <MdFavorite className="full_heart" />
                ) : (
                  <MdFavoriteBorder className="empty_heart" />
                )}
              </div>
              {data && data.results[0].name}, {data && data.results[0].country}
            </div>
            <div className="forecast">
              <div className="temperature">
                <FaTemperatureFull className="temperature_icon" />{" "}
                {forecast && forecast.current.apparent_temperature.toFixed(0.1)}
                {forecast && forecast.current_units.apparent_temperature}
              </div>
              <div className="humidity">
                <WiHumidity className="humidity_icon" />{" "}
                {forecast && forecast.current.relative_humidity_2m}
                {forecast && forecast.current_units.relative_humidity_2m}
              </div>
              <div className="wind">
                <FaWind className="wind_icon" />{" "}
                {forecast && forecast.current.wind_speed_10m.toFixed(0.1)}{" "}
                {forecast && forecast.current_units.wind_speed_10m}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
