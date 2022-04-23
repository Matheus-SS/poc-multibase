import { Table, Column, Model } from 'sequelize-typescript';

@Table({ modelName: 'cats', timestamps: false })
export class Cats extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
