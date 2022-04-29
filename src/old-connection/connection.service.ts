import { Injectable, Inject } from '@nestjs/common';
import { Cats } from './cat.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Configuracao } from './connection.entity';

@Injectable()
export class ConfiguracaoService {
  constructor(
    @InjectModel(Configuracao)
    private configuracaoRepository: typeof Configuracao,
  ) {}

  async findOne(): Promise<Configuracao> {
    return this.configuracaoRepository.findOne<Configuracao>({
      where: {
        id: '1',
      },
    });
  }
}
