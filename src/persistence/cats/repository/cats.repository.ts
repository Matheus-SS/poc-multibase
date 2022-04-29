import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseInterceptor } from 'src/interceptor';
import { GetHeader } from 'src/interceptor/getHeader.service';

import { Cats } from '../model/cats.model';

@Injectable()
export class CatsRepository {
  constructor(
    @Inject('CatsModel') private cats: typeof Cats,
    @Inject('CONNECTION') private database: DatabaseService,
  ) {}

  public async getAllCats(base: string) {
    const single = GetHeader.getInstance().getHeader();
    console.log('REPOSITORY...', single);
    // const result = this.cats.findAll();
    const result = this.database.findAll(Cats, base);

    return result;
  }
}
