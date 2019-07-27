import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { VillainModel } from './villain.model';
import { Injectable } from '@angular/core';

export interface VillainsState extends EntityState<VillainModel> {}

@Injectable()
@StoreConfig({ name: 'heroes' })
export class VillainsStore extends EntityStore<VillainsState, VillainModel> {
  constructor() {
    super();
  }
}
