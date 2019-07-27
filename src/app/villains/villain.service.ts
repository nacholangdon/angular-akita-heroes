import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { VillainModel } from './villain.model';
import { Observable, throwError } from 'rxjs';
import { BaseUrl } from '../shared/api.config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VillainService {
  constructor(private http: HttpClient) {}

  getVillains(): Observable<VillainModel[]> {
    return this.http.get<VillainModel[]>(`${BaseUrl.villain}`);
  }

  getVillain(id: string): Observable<VillainModel> {
    return this.http
      .get<VillainModel>(`${BaseUrl.villain}${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  addVillain(villain: VillainModel): Observable<VillainModel> {
    return this.http.post<VillainModel>(`${BaseUrl.villain}`, villain).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(new Error(err.message));
      })
    );
  }

  updateVillain(villain: VillainModel): Observable<VillainModel> {
    return this.http
      .put<VillainModel>(`${BaseUrl.villain}${villain.id}`, villain)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(new Error(err.message));
        })
      );
  }

  removeVillain(id: string): Observable<VillainModel> {
    return this.http.delete<VillainModel>(`${BaseUrl.villain}${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(new Error(err.message));
      })
    );
  }
}
