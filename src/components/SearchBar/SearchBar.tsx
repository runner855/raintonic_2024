import React, { useEffect, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import CitiesApiCall from "../../Api/CitiesApiCall";
import { CityDataProps, DataProps, ForecastProps } from "../../Types/Apptypes";
import ForecastApiCall from "../../Api/ForecastApiCall";
import { Card } from "antd";
import "../SearchBar/SearchBar.css";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [city, setCity] = useState<CityDataProps[]>();
  const [data, setData] = useState<DataProps>();
  const [forecast, setForecast] = useState<ForecastProps>();
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
      forecast &&
      ForecastApiCall.get(
        `forecast?latitude=${CityLongitude}&longitude=${CityLongitude}&forecast_days=7& &current=relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m`,
        {}
      ).then((res) => setForecast(res.data));
  };

  return (
    <div className="main_container">
      <div className="searchbar_container">
        <Space direction="vertical">
          <Search
            placeholder="search your city here!!"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
      <div className="card">
        <Card style={{ width: 400 }}>
          <div className="city">
            {data && data.results[0].name}, {data && data.results[0].country}
          </div>
          <div className="forecast"></div>
        </Card>
      </div>
    </div>
  );
};
