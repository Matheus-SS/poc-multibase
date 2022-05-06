import { Inject, Injectable } from '@nestjs/common';
import { FindOptions, Model, ModelCtor } from 'sequelize';
import { ModelType, Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { GetHeader } from 'src/interceptor/getHeader.service';
import { Cats } from 'src/persistence/cats/model/cats.model';
import { Configuracao } from 'src/persistence/connection/model/connection.model';
import { Config } from '../config/index';

interface Tenant {
  name: string;
  senha: string;
  host: string;
  porta: string;
  base: string;
}

interface IConnection {
  base: string;
  model?: any;
}
@Injectable()
export class DatabaseService {
  private connections: Record<string, Sequelize> = {};
  constructor() {
    this.connectDatabase();
  }

  private connectDatabase(): void {
    const { database } = Config();
    const sequelize = new Sequelize({
      username: database.username,
      database: database.name,
      port: database.port,
      dialect: database.dialect as Dialect,
      host: database.host,
      password: database.password,
      models: [Configuracao],
    });

    sequelize
      .authenticate()
      .then(() => {
        console.log('CONECTADO NO BANCO conexaoDB');
      })
      .catch((err) => console.log('Erro na conexaoDB', err));

    return;
  }

  public async connectTenant(config: Tenant): Promise<void> {
    const sequelize = new Sequelize({
      username: config.name,
      database: config.base,
      port: Number(config.porta),
      dialect: 'postgres' as Dialect,
      host: config.host,
      password: config.senha,
    });

    this.connections = {
      ...this.connections,
      [config.base]: sequelize,
    };
    sequelize
      .authenticate()
      .then(() => {
        console.log(`CONECTADO NO BANCO ${config.base}`);
      })
      .catch((err) => console.log('Erro na conexaoDB', err));
    return;
  }

  public getConnection({ base, model }: IConnection) {
    this.connections[base].addModels([Cats]);
    return this.connections[base].model(model);
  }

  // public connectDatabase2(): Sequelize {
  //   const { database } = Config();
  //   const sequelize = new Sequelize({
  //     username: 'postgres',
  //     database: 'nest1',
  //     port: 5433,
  //     dialect: database.dialect as Dialect,
  //     host: database.host,
  //     password: 'postgres',
  //     models: [Cats],
  //   });

  //   sequelize.sequelize
  //     .authenticate()
  //     .then(() => {
  //       console.log('CONECTADO NO BANCO NEST1');
  //     })
  //     .catch((err) => console.log('Erro na conexaoDB', err));

  //   return sequelize;
  // }

  // public connectDatabase3(): Sequelize {
  //   const { database } = Config();

  //   if (this.connections.NEST2) {
  //     this.connections.NEST2.addModels([Cats]);
  //     return this.connections.NEST2.authenticate()
  //       .then(() => {
  //         console.log('CONNECTION GUARDADA');
  //       })
  //       .catch((err) => console.log('Erro na conexaoDB', err));
  //   }
  //   const sequelize = new Sequelize({
  //     username: 'postgres2',
  //     database: 'nest2',
  //     port: 5434,
  //     dialect: database.dialect as Dialect,
  //     host: database.host,
  //     password: 'postgres2',
  //     models: [Cats],
  //   });

  //   sequelize
  //     .authenticate()
  //     .then(() => {
  //       console.log('CONECTADO NO BANCO NEST2');
  //     })
  //     .catch((err) => console.log('Erro na conexaoDB', err));

  //   this.connections = {
  //     NEST2: sequelize,
  //   };
  //   return sequelize;
  // }

  // public getConnection() {
  //   return sequelize;
  // }
}
