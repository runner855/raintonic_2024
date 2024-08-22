import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ForecastProps } from "../../Types/Apptypes";

export const AppContainer = () => {
  return (
    <div>
      <div>What's the weather like today?</div>
      <SearchBar />
    </div>
  );
};
