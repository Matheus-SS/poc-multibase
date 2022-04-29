import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Cats } from './cat.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'nest1',
      });

      sequelize.addModels([Cats]);
      sequelize
        .authenticate()
        .then((res) => Logger.log('Database connected successfully NEST1'))
        .catch((err) => {
          Logger.error(`Error with database connection: ${err}`, 'Database');
          process.exit();
        });
      return sequelize;
    },
  },
];
