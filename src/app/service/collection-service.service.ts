import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Collection } from '../bean/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {
  

  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";
  // private baseURL = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' as 'body'
  };

  getCollections() {
    const collectionURL = `${this.baseURL}collections/`;
    console.log(collectionURL);
    return this.http
    .get(collectionURL)
    .pipe(
      tap(_ => console.log(`fetched collections`)),
      catchError(this.handleError(`Error in Fetching Collections`)));
  }

  addCollection(collection_name: String)   {
    const collectionInsertURL = `${this.baseURL}collections/add`;
    const body = JSON.stringify({"collection_name": collection_name,"parent_id":-1});
    console.log(collectionInsertURL);
    console.log(body);

      return this.http.post<Collection>(collectionInsertURL,body,this.httpOptions)
      .pipe(
        tap(_=>console.log(`CollectionInserted`)),
        catchError(this.handleError(`Unable to insert user`)));
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
