import { weatherIconUrl } from "../services/api";
import { getShortDate } from "../utils";

export function Forecast({ forecast }) {
  return (
    <>
      <h2 className="text-lg font-bold mb-4">Forecast</h2>
      <div className="flex flex-wrap gap-2">
        {forecast.list.slice(0, 5).map((forecastItem, index) => {
          const { dt, weather, main, wind } = forecastItem;
          return (
            <div key={index} className="p-2 w-32 rounded-lg shadow-md">
              <p className="font-semibold">{getShortDate(dt)} </p>
              <div className="felx justify-center mb-1">
                <img
                  src={`${weatherIconUrl}${weather[0].icon}.png`}
                  alt={weather[0].description}
                />
              </div>
              <p className="text-xl font-bold">{Math.round(main.temp)}&deg;C</p>
              <p className="font-semibold">{weather[0].main} </p>
              <div>{Math.round(wind.speed)} m/s</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
