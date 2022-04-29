import { IConfig } from './IConfig';

export const Config = (): IConfig => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  graphqlPlayground: Boolean(process.env.GRAPHQL_PLAYGROUND) || true,
  database: {
    dialect: process.env.DIALECT || 'postgres',
    name: process.env.DATABASE_NAME || 'conexaoDB',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASSWORD || 'root',
    host: process.env.DATABASE_HOST || 'localhost',
    connectionNumber: 1,
  },
});
