import { rest } from 'msw';

import { backgroundImages } from './backgroundImages';

export const handlers = [
    rest.get('photos/random', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                urls: {
                    regular: backgroundImages[0]
                }
            })
        );
    }),
];