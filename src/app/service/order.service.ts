import { Injectable } from '@angular/core';
import { Http2ServerRequest } from 'http2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";

  constructor(private http:HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' as 'body'
  };
  getOrdersByOrderId(id:any): any {
    const url = `${this.baseURL}order_master/getAllByOrderId/${id}`;
    console.log(url);
    return this.http
    .get(url)
    .pipe(
      tap(_=>console.log(`fetched collection by id`)),
      catchError(this.handleError(`Erro fetching collection by id`))
    )
  }
  getOrders() {
    const collectionURL = `${this.baseURL}order_master/`;
    console.log(collectionURL);
    return this.http
    .get(collectionURL)
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
