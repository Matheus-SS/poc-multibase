import { Injectable } from '@nestjs/common';
import { FindOptions, Model } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
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
@Injectable()
export class DatabaseService {
  private connections: any = {};
  constructor() {
    this.connectDatabase();
  }
  private connectDatabase(): Sequelize {
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

    return sequelize;
  }

  public connectTenant(config: Tenant): void {
    const sequelize = new Sequelize({
      username: config.name,
      database: config.base,
      port: Number(config.porta),
      dialect: 'postgres' as Dialect,
      host: config.host,
      password: config.senha,
      models: [Cats],
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

  private async executeWithModel(
    model: any,
    base: string,
    func: string,
    ...args: any[]
  ): Promise<any> {
    let result = null;

    this.connections[base].addModels([Cats]);

    try {
      const queryResult = await this.connections[base]
        .model(model)
        [func].call(this.connections[base].model(model), ...args);

      if (Array.isArray(queryResult)) {
        result = queryResult.map((qr) => qr.dataValues);
      } else {
        result = queryResult?.dataValues;
      }
    } catch (err) {
      throw err;
    }

    return result;
  }

  public async findAll(
    model: typeof Model,
    base: string,
    findOptions?: FindOptions,
  ): Promise<any> {
    return await this.executeWithModel(model, base, 'findAll', findOptions);
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
