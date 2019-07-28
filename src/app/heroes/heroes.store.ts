import { EntityStore, StoreConfig } from '@datorama/akita';
import { HeroesState, HeroModel } from './hero.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'heroes' })
export class HeroesStore extends EntityStore<HeroesState, HeroModel> {
  constructor() {
    super();
  }
}
