import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeliveryBoyService {
  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";
  constructor(private http: HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
    observe: 'response' as 'body'
  };

  getAllDeliveryBoy(){
    let url = `${this.baseURL}deliveryBoy`
    return this.http.get(url)
    .pipe(
      tap(_=>console.log(`fetched All Delivery Boys`),
      catchError(this.handleError(`Error in fetching all the delivery boys`)))
    )
  }

  
  getAllDeliveryBoyById(delivery_boy_id:any){
    let url = `${this.baseURL}deliveryBoy/${delivery_boy_id}`
    return this.http.get(url)
    .pipe(
      tap(_=>console.log(`fetched All Delivery Boys`),
      catchError(this.handleError(`Error in fetching all the delivery boys`)))
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
