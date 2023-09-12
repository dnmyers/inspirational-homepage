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
    // rest.get("https://api.openweathermap.org/data/3.0/onecall", (req, res, ctx) => {
    //     return res(
    //         ctx.status(200),
    //         ctx.json({
    //             lat: 25.9784704,
    //             lon: -97.501184,
    //             exclude: 'minutely,hourly,daily,alerts',
    //             appid: 'e4aa54f8559cb54c9f4e62a51cba49f4',
    //         })
    //     );
    // }),
];