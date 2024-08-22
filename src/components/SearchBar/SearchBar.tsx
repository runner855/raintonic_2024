import React, { useEffect, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import "../SearchBar/SearchBar.css";
import CitiesApiCall from "../../Api/CitiesApiCall";
import { CityDataProps, DataProps } from "../../Types/Apptypes";
import ForecastApiCall from "../../Api/ForecastApiCall";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [city, setCity] = useState<CityDataProps[]>();
  const [data, setData] = useState<DataProps>();
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
      ).then((res) => console.log(res.data));
  };

  return (
    <div className="searchbar_container">
      <Space direction="vertical">
        <Search
          placeholder="search your city here!!"
          onSearch={onSearch}
          enterButton
        />
      </Space>
    </div>
  );
};
