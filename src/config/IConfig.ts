export interface IConfig {
  nodeEnv: string;
  port: number;
  graphqlPlayground: boolean;
  database: {
    dialect: string;
    name: string;
    port: number;
    username: string;
    password: string;
    host: string;
    connectionNumber: number;
  };
}
