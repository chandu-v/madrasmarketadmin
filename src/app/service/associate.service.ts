import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {
  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";

  constructor(private http: HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' as 'body'
  };

  getAllAssociates(){
    let url = `${this.baseURL}associate`;
    return this.http.get(url).pipe(
      tap(_=>console.log(`Fetched all the associates`)),
      catchError(this.handleError(`Error Occured in Fetching the Associates Data`))
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
    console.error(error); // log to console instead
    return of(result as T);
  };
}
}
