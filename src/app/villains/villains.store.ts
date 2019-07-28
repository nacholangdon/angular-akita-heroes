import { EntityStore, StoreConfig } from '@datorama/akita';
import { VillainModel, VillainsState } from './villain.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'heroes' })
export class VillainsStore extends EntityStore<VillainsState, VillainModel> {
  constructor() {
    super();
  }
}
