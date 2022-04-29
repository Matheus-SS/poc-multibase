import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Cats } from './cat.entity';
import { CatsService } from './cat.service';
import { ConfiguracaoService } from './connection.service';
@Controller('cats')
export class CatController {
  private seque = null;
  private connections: any = {};
  constructor(
    private readonly catsService: CatsService,
    private readonly configService: ConfiguracaoService,
  ) {}
  @Get()
  public async getCat() {
    return await this.catsService.findAll();
  }

  @Get('/bd2')
  public async getCat2() {
    console.log(this.connections);
    return await this.catsService.findAll();
  }

  @Get('/login')
  public async login(@Param('id') id: string) {
    if (this.connections.NEST1) {
      console.log('Connection guardada');
      this.d();
      return this.connections.NEST1.authenticate().then(() => {
        console.log('GUARDADA');
      });
      // return this.connections.NEST1;
    }
    this.seque = new Sequelize({
      dialect: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'nest1',
      models: [],
    });

    // Object.freeze(this.seque);
    this.connections = {
      ...this.connections,
      NEST1: this.seque,
    };
    this.seque.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    });
    return 'DATABASE';
  }

  private d() {
    return this.connections.NEST1;
  }
  @Get('/login2')
  public async login2(@Param('id') id: string) {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'conexaoDB',
      models: [Cats],
    });

    this.connections = {
      ...this.connections,
      conexaoDB: 'CONEXAO_DB',
    };
    return 'CONNECTION';
  }
}
