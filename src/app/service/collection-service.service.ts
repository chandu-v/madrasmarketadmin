import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {

  private baseURL = "https://madrasmarketapi.azurewebsites.net/";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };

  getCollections() {
    const collectionURL = `${this.baseURL}collections/`;
    console.log(collectionURL);
    return this.http.get(collectionURL).pipe(
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
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // console.log(error); 

      // TODO: better job of transforming error for user consumption
      //     this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
