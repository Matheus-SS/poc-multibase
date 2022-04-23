import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Cats } from './cat.entity';

export const connectionProviders = [
  {
    provide: 'CONNECTION',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'conexaoDB',
      });

      sequelize
        .authenticate()
        .then((res) => Logger.log('Database connected successfully CONNECTION'))
        .catch((err) => {
          Logger.error(`Error with database connection: ${err}`, 'Database');
          process.exit();
        });
      return sequelize;
    },
  },
];
