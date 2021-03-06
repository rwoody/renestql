import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: false,

  env: {
    NODE_ENV: 'development',
    GRAPHQL_DEPTH_LIMIT: '5',
    GRAPHQL_QUERY_COST_LIMIT: '1000',
  },

  server: {
    domainUrl: 'http://localhost',
    port: 4000,
  },

  database: {
    host: '127.0.0.1',
    port: 3307,
    database: 'renestql_db',
    username: 'root',
    password: 'root',
    logging: true,
    synchronize: false,
    dropSchema: false,
    retryAttempts: 3,
  },

  auth: {
    secretKey: 'supersecretkey',
    tokenExpiresIn: '1d',
  },

  debug: {
    printErrorStack: true,
    printRawError: false,
  },
};
