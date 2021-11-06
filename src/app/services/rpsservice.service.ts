import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }),
};

const path = environment.rpsgameback;

@Injectable({
  providedIn: 'root'
})

export class RpsserviceService {

  constructor(private http: HttpClient) { }

  get(endpoint: string, element: any) {
    return this.http.post(path + endpoint, element, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getParam(endpoint: string, element: string) {
    return this.http.get(path + endpoint + '/'  + element).pipe(
      catchError(this.handleError)
    );
  }  

  post(endpoint: string, element: any) {
    return this.http.post(path + endpoint, element, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  patch(endpoint: string, element: any) {
    return this.http.patch(path + endpoint, element, httpOptions).pipe(
      catchError(this.handleError)
    );
  }  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
    }
    return throwError(error.error);
  }

}
