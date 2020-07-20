import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttributeMasterServiceService {
  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };
  constructor(private http: HttpClient) { }

  getAllAttribute() {
    let url = `${this.baseURL}attribute_master/`
    return this.http
      .get(url)
      .pipe(
        tap(_ => console.log(`fetched collections`)),
        catchError(this.handleError(`Error in Fetching Collections`)));
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* param operation - name of the operation that failed
* param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }


}
