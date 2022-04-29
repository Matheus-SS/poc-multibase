import { Cats } from './cats.model';

export const catsProviders = [
  {
    provide: 'CatsModel',
    useValue: Cats,
  },
];
