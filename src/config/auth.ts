export default {
    jwt: {
        secret: process.env.APP_SECRET || 'test',
        expiredIn: '1d',
    },
};
