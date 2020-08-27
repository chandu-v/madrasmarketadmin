import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };

  getAllReferrals() {

    const url = `${this.baseURL}referral`
    return this.http.get(url)
    .pipe(
      tap(_=>console.log(`got referrals`)),
      catchError(this.handleError(`Errors in getting referrals`))
    )
  }

  getAllReferralsByAssociateId(id:any) {

    const url = `${this.baseURL}referral/getByAssociateId/${id}`
    return this.http.get(url)
    .pipe(
      tap(_=>console.log(`got referrals`)),
      catchError(this.handleError(`Errors in getting referrals`))
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
