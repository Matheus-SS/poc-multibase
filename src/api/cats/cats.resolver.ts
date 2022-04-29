import { Inject, UseInterceptors } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseInterceptor } from 'src/interceptor';
import { Cats } from 'src/persistence/cats/model/cats.model';
import { CatsRepository } from 'src/persistence/cats/repository/cats.repository';
import { Configuracao } from 'src/persistence/connection/model/connection.model';
import { ConnectionRepository } from '../../persistence/connection/connection.repository';
import { CatsEntity } from './cats.entity';
import { ConfiguracaoEntity } from './configuracao.entity';

@Resolver()
@UseInterceptors(DatabaseInterceptor)
export class CatsResolver {
  constructor(
    @Inject('ConnectionRepo')
    private connectionRepository: ConnectionRepository,
    @Inject('CatsRepo')
    private catsRepository: CatsRepository,
    @Inject('CONNECTION')
    private database: DatabaseService,
  ) {}
  @Query((returns) => ConfiguracaoEntity)
  public async Hello(@Args('base', { type: () => String }) base: string) {
    // console.log('HELLO...', t);
    const r = await this.connectionRepository.getConnectionByBase(base);
    this.database.connectTenant(r);
    // const t = await this.catsRepository.getAllCats('nest1');
    //console.log('CATS...', t);
    return r;
  }
  @Query((returns) => [CatsEntity])
  public async Hello2(@Args('base', { type: () => String }) base: string) {
    const t = await this.catsRepository.getAllCats(base);
    console.log(t);
    //const r = await this.connectionRepository.getConnectionByBase('nest1');

    return t;
  }
}
