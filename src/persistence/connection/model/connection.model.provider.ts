import { Configuracao } from './connection.model';

export const configuracaoProviders = [
  {
    provide: 'ConfiguracaoModel',
    useValue: Configuracao,
  },
];
