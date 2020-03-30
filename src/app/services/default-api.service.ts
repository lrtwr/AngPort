import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Idbservice } from './Idbservice';

@Injectable()
export class DefaultApiService<TModel> implements Idbservice<TModel> {
  constructor(public http: HttpClient, public apiURL: string) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  GetAll(): Observable<TModel> {
    return this.http.get<TModel>(this.apiURL + '/')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  Get(id: any): Observable<TModel> {
    return this.http.get<TModel>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  Post(model: TModel): Observable<TModel> {
    return this.http.post<TModel>(this.apiURL, JSON.stringify(model), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  Put(id: any, model: TModel): Observable<TModel> {
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = JSON.stringify(model);
    return this.http.put<TModel>(this.apiURL + '/' + id, body, { headers, params })
      .pipe(catchError(this.handleError));
  }

  Delete(id: any) {
    return this.http.delete<TModel>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
