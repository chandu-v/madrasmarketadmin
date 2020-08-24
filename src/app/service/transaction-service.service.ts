import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };

  getAllTransactions() {

    const url = `${this.baseURL}transaction_master`
    console.log(url);
    return this.http.get(url)
    .pipe(
      tap(_=>console.log(`got transactions`)),
      catchError(this.handleError(`Errors in getting transactions`))
    )
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