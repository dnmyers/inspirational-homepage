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
];