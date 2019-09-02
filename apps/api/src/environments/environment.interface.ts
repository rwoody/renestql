import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * environment variables that goes into process.env
 */
export interface Env {
  LOG_LEVEL?: LogLevel;
  [key: string]: string;
}

/**
 * Server Environment
 */
export interface IEnvironment {
  production: boolean;
  envName: string;

  env?: Env;

  server: {
    domainUrl: string;
    port: number;
  };

  database: TypeOrmModuleOptions;

  auth: {
    secretKey: string;
  };
}