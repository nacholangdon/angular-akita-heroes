import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HeroesStore } from './heroes.store';
import { HeroesState, HeroModel } from './hero.model';

@Injectable({ providedIn: 'root' })
export class HeroesQuery extends QueryEntity<HeroesState, HeroModel> {
  constructor(protected heroesStore: HeroesStore) {
    super(heroesStore);
  }
}
