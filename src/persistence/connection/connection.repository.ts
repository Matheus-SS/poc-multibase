import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseService } from 'src/database/database.service';
import { Configuracao } from './model/connection.model';

@Injectable()
export class ConnectionRepository {
  constructor(
    @Inject('ConfiguracaoModel') private configuracao: typeof Configuracao,
  ) {}

  public async getConnectionByBase(base: string) {
    const result = this.configuracao.findOne({
      where: {
        base: base,
      },
    });

    return result;
  }
}
