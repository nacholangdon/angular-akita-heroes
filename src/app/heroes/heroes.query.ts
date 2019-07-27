import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HeroStore } from './hero-store.service';
import { HeroesState, HeroModel } from './hero.model';

@Injectable({ providedIn: 'root' })
export class HeroesQuery extends QueryEntity<HeroesState, HeroModel> {
  constructor(protected heroesStore: HeroStore) {
    super(heroesStore);
  }
}
