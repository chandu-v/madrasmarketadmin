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
     
    return this.http
    .get(url)
    .pipe(
      tap(_=>console.log(`fetched Order by id`)),
      catchError(this.handleError(`Erro fetching Order by id`))
    )
  }
  getOrders(status_id:any) {
    const collectionURL = `${this.baseURL}order_master/getAllOrdersByStatusId/v2/${status_id}`;
     
    return this.http
    .get(collectionURL)
    .pipe(
      tap(_ => console.log(`fetched Order`)),
      catchError(this.handleError(`Error in Fetching Order`)));
  }

  getOrderItems(order_id:any):any{
    const url = `${this.baseURL}order_master/getOrderItemsDetails/v2/${order_id}`;
     
    return this.http
    .get(url)
    .pipe(
      tap(_=>console.log(`fetched order items`)),
      catchError(this.handleError(`Error in Fetching OrderItems`))
    )
  }

  updateOrderStatus(statusId:any,order_id:any){
    let url = `${this.baseURL}order_master/update/${order_id}/${statusId}`;
     
    return  this.http.get(url).pipe(
      tap(_=>console.log(`Order Status Updated`)),
      catchError(this.handleError( `Error occured in updating order status`))
    )
  }

  search(status_id: any, searchterm: string) {
    let url = `${this.baseURL}order_master/getAllOrdersBySearchTerm/${status_id}/${searchterm}`
    return this.http.get(url).pipe(
      tap(_=>console.log()),
      catchError(this.handleError(`Error`))
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
