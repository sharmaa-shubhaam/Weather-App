import { useEffect } from "react";
import { useAppSelector } from "./redux/store";
import { weatherApi } from "./redux/weatherApiReducer";
import { IoLocationOutline } from "react-icons/io5";
import { BiWind } from "react-icons/bi";
import { IoWaterOutline } from "react-icons/io5";

export default function App() {
   const response = useAppSelector(weatherApi);

   useEffect(() => {
      console.log(response);
   }, [response]);

   return (
      <div className="px-4 py-2">
         <section>
            <div className="text-center py-3">
               <h1 className="text-3xl font-semibold text-green-600">Weather App</h1>
            </div>
            <div className="flex items-center justify-center py-10">
               <div className="p-2 border w-[350px] rounded">
                  <div className="flex items-center space-x-2">
                     <IoLocationOutline className="text-xl" />
                     <span className="text-base font-semibold">{response.location.name}</span>
                  </div>
                  <div className="text-center py-1">
                     <span className="text-base text-gray-600 font-semibold">Today, {new Date().getDate()} March</span>
                  </div>
                  <div className="py-3 space-x-2 flex items-end justify-center">
                     <h1 className="text-6xl font-bold">{response.current.feelslike_c}</h1>
                     <span className="font-medium text-gray-400">celsius</span>
                  </div>
                  <div className="text-center">
                     <h3 className="text-sm font-semibold">Cloudy {response.current.cloud}%</h3>
                  </div>
                  <div className="pb-5 pt-8 font-medium text-gray-500">
                     <div className="flex items-center justify-center space-x-5">
                        <div className="flex items-center justify-center space-x-2 flex-1">
                           <BiWind />
                           <span>Wind</span>
                        </div>
                        <div className="flex-1 text-center">
                           <span>{response.current.gust_kph}km/h</span>
                        </div>
                     </div>
                     <div className="flex items-center justify-center space-x-5">
                        <div className="flex items-center justify-center flex-1 space-x-2">
                           <IoWaterOutline />
                           <span>Hummidity</span>
                        </div>
                        <div className="flex-1 text-center">
                           <span>{response.current.humidity}%</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}
