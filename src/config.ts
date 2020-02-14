import 'dotenv/config';

const appKey        = process.env.APP_KEY        || 'some-random-string';
const serverAddress = process.env.SERVER_ADDRESS || 'http://localhost:3333';

const config: IConfig = {
  app: {
    port: process.env.PORT || 3333,
    url:  serverAddress,
    key:  appKey,
  },
};
export default config;

interface IConfig {
  app:    any;
};
