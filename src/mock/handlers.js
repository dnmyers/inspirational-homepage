import { rest } from 'msw';

import { backgroundImages } from './backgroundImages';

export const handlers = [
    rest.get("https://api.unsplash.com/photos/random", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                urls: [
                    backgroundImages[0],
                    backgroundImages[1],
                    backgroundImages[2],
                    backgroundImages[3],
                    backgroundImages[4],
                ],
            })
        );
    }),
    rest.get("https://api.openweathermap.org/data/3.0/onecall", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                lat: 33.44,
                lon: -94.04,
                timezone: "America/Chicago",
                timezone_offset: -18000,
                current: {
                    dt: 1627440000,
                    sunrise: 1627390819,
                    sunset: 1627442970,
                    temp: 297.77,
                    feels_like: 297.77,
                    pressure: 1015,
                    humidity: 78,
                    dew_point: 293.71,
                    uvi: 0,
                    clouds: 75,
                    visibility: 10000,
                    wind_speed: 2.06,
                    wind_deg: 0,
                    wind_gust: 3.58,
                    weather: [
                        {
                            id: 803,
                            main: "Clouds",
                            description: "broken clouds",
                            icon: "04d",
                        },
                    ],
                },
            })
        );
    }),
];