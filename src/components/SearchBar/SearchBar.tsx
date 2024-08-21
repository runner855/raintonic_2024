import React, { useEffect, useState } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { GetProps } from "antd";
import "../SearchBar/SearchBar.css";
import CitiesApiCall from "../../Api/CitiesApiCall";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    setSearchValue(value);
  searchValue &&
    CitiesApiCall.get(
      `search?name=${searchValue}&count=1&language=en&format=json`,
      {}
    ).then((res) => console.log(res.data.results));

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
