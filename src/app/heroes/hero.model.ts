import { ID, guid, EntityState } from '@datorama/akita';

export type HeroModel = {
  id: ID;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};

export interface HeroesState extends EntityState<HeroModel> {}
