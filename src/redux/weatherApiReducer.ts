import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";
import { WeatherApiInterface } from "./weatherApi";

async function fetchWeatherApi({ location }: { location: string }) {
   try {
      const response = await axios.get(
         `http://api.weatherapi.com/v1/forecast.json?key=250d1c27e4cb4514922200441240903&q=${location}&days=7`
      );
      return response.data as WeatherApiInterface;
   } catch (error) {
      console.log(error);
   }
}

const InititalWeatherApi = await fetchWeatherApi({ location: "london" });

const weatherApiReducer = createSlice({
   name: "weather_api",
   initialState: InititalWeatherApi as WeatherApiInterface,
   reducers: {},
});

export const weatherApi = (state: RootState) => state.weather_api;

export default weatherApiReducer.reducer;
