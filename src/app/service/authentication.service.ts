import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";

  constructor(private http: HttpClient) { }

  getToken(userName:String,password:String) {
    const url = `${this.baseURL}authenticate/`;
     
    let requestBody = {
      "userName": userName,
      "password": password
    };
    return this.http
      .post(url, requestBody, this.httpOptions)
      .pipe(
        tap(_ => console.log(`fetched collections`)),
        catchError(this.handleError(`Error in Fetching Collections`)));
  }

  validateToken(token:string){
    const url = `${this.baseURL}validateSession/${token}`;
    return this.http.get(url).pipe(
      tap(_=>console.log(`fetched validated Token`)),
      catchError(this.handleError(`Error in validating token`))
      
    )
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };

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
