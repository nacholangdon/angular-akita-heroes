import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { VillainsStore } from './villains.store';
import { VillainModel, VillainsState } from './villain.model';

@Injectable({ providedIn: 'root' })
export class VillainsQuery extends QueryEntity<VillainsState, VillainModel> {
  constructor(protected villainsStore: VillainsStore) {
    super(villainsStore);
  }
}
