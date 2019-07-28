import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { VillainModel } from './villain.model';
import { throwError } from 'rxjs';
import { BaseUrl } from '../shared/api.config';
import { catchError } from 'rxjs/operators';
import { VillainsStore } from './villains.store';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class VillainsService {
  constructor(private http: HttpClient, private villainStore: VillainsStore) {}

  getVillains(): void {
    this.http
      .get<VillainModel[]>(`${BaseUrl.villain}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error.message);
        })
      )
      .subscribe(data => this.villainStore.set(data));
  }

  getVillain(id: string): void {
    this.http
      .get<VillainModel>(`${BaseUrl.villain}${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error.message);
        })
      )
      .subscribe(data => this.villainStore.add(data));
  }

  addVillain(villain: VillainModel): void {
    this.http
      .post<VillainModel>(`${BaseUrl.villain}`, villain)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error.message);
        })
      )
      .subscribe(data => this.villainStore.add(data));
  }

  updateVillain(villain: VillainModel): void {
    this.http
      .put<VillainModel>(`${BaseUrl.villain}${villain.id}`, villain)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error.message);
        })
      )
      .subscribe(data =>
        this.villainStore.update(villain.id, {
          ...data
        })
      );
  }

  removeVillain(id: ID): void {
    this.http
      .delete<VillainModel>(`${BaseUrl.villain}${id}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          alert(error.message);
          return throwError(error.message);
        })
      )
      .subscribe(() => this.villainStore.remove(id));
  }
}
