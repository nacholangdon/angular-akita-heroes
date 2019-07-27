import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HeroModel } from './hero.model';
import { throwError } from 'rxjs';
import { BaseUrl } from '../shared/api.config';
import { HeroStore } from './hero-store.service';
import { catchError } from 'rxjs/operators';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient, private heroStore: HeroStore) {}

  getHeroes(): void {
    this.http
      .get<HeroModel[]>(`${BaseUrl.hero}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(new Error(error.message));
        })
      )
      .subscribe(data => this.heroStore.set(data));
  }

  getHero(id: string): void {
    this.http
      .get<HeroModel>(`${BaseUrl.hero}${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(new Error(error.message));
        })
      )
      .subscribe(data => this.heroStore.add(data));
  }

  addHero(hero: HeroModel): void {
    this.http
      .post<HeroModel>(`${BaseUrl.hero}`, hero)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(new Error(error.message));
        })
      )
      .subscribe(data => this.heroStore.add(data));
  }

  updateHero(hero: HeroModel): void {
    this.http
      .put<HeroModel>(`${BaseUrl.hero}${hero.id}`, hero)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(new Error(error.message));
        })
      )
      .subscribe(data => this.heroStore.update(hero.id, { ...data }));
  }

  removeHero(id: ID): void {
    this.http
      .delete<any>(`${BaseUrl.hero}${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(new Error(error.message));
        })
      )
      .subscribe(() => this.heroStore.remove(id));
  }
}
