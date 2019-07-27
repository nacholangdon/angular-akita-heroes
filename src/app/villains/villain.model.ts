import { ID, guid } from '@datorama/akita';

export type VillainModel = {
  id: ID;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};
