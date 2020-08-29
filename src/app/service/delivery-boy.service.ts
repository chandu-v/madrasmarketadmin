import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { delivery_boy } from '../bean/delivery_boy';

@Injectable({
  providedIn: 'root'
})
export class DeliveryBoyService {


  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };

  getAllDeliveryBoy() {
    let url = `${this.baseURL}deliveryBoy`
    return this.http.get(url)
      .pipe(
        tap(_ => console.log(`fetched All Delivery Boys`),
          catchError(this.handleError(`Error in fetching all the delivery boys`)))
      )
  }


  getAllDeliveryBoyById(delivery_boy_id: any) {
    let url = `${this.baseURL}deliveryBoy/${delivery_boy_id}`
    return this.http.get(url)
      .pipe(
        tap(_ => console.log(`fetched All Delivery Boys`),
          catchError(this.handleError(`Error in fetching all the delivery boys`)))
      )
  }

  getAllDeliveryBoyByStatusId(arg0: any) {
    let url = `${this.baseURL}deliveryBoy/status/${arg0}`
    return this.http.get(url)
      .pipe(
        tap(_ => console.log(`fetched All Delivery Boys`),
          catchError(this.handleError(`Error in fetching all the delivery boys`)))
      )
  }


  save(delivery_boy_name: any, delivery_boy_phone_number: any) {
    let url = `${this.baseURL}deliveryBoy/save`;
    let requestBody = `{
      "boy_name":"${delivery_boy_name}",
      "phone_number":"${delivery_boy_phone_number}",
      "password":"demo",
      "status":0,
      "lat":"0",
      "lon":"0"

    }`;


    console.log(requestBody);
    return this.http.post(url, requestBody, this.httpOptions).pipe(
      tap(_ => console.log("Saved Successfully")),
      catchError(this.handleError(`Error occured while inserting delivery boy`))
    )
  }

  updateDetails(persons: delivery_boy) {
    let url = `${this.baseURL}deliveryBoy/save`;
    let requestBody = `{
      "boy_id": ${persons.boy_id},
      "boy_name": "${persons.boy_name}",
      "password": "demo",
      "phone_number": "${persons.phone_number}",
      "lat": "${persons.lat}",
      "lon": "${persons.lon}",
      "status": "${persons.status}"
  }`;


    console.log(requestBody);
    return this.http.post(url, requestBody, this.httpOptions).pipe(
      tap(_ => console.log("Saved Successfully")),
      catchError(this.handleError(`Error occured while inserting delivery boy`))
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
