import { Table, Column, Model } from 'sequelize-typescript';

@Table({ modelName: 'configuracaos', timestamps: false })
export class Configuracao extends Model {
  @Column
  name: string;

  @Column
  senha: string;

  @Column
  host: string;

  @Column
  porta: string;

  @Column
  base: string;
}
