import { Injectable, Inject } from '@nestjs/common';
import { Cats } from './cat.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cats)
    private catsRepository: typeof Cats,
  ) {}

  async findAll(): Promise<Cats[]> {
    return this.catsRepository.findAll<Cats>();
  }
}
