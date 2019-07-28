import { EntityState, ID } from '@datorama/akita';

export type VillainModel = {
  id: ID;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};

export interface VillainsState extends EntityState<VillainModel> {}
