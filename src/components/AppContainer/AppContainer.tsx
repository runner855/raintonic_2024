import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { ForecastProps } from "../../Types/Apptypes";
import "../AppContainer/AppContainer.css";

export const AppContainer = () => {
  return (
    <div>
      <div className="title">What's the weather like today?</div>
      <SearchBar />
    </div>
  );
};
