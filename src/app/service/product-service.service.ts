import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,  tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };

  getProducts() {
    const collectionURL = `${this.baseURL}products/`;
    console.log(collectionURL);
    return this.http.get(collectionURL).pipe(
      tap(_ => console.log(`fetched Products`)),
      catchError(this.handleError(`Error in Fetching Collections`)));
  }

  add(product_attributes: { product_Attribute_EmbeddedId: { attribute_id: number; }; value: any; }[]) {
    const addProductUrl = `${this.baseURL}products/add`;
    console.log(addProductUrl);
    console.log(product_attributes);
    return this.http.post(addProductUrl,product_attributes,this.httpOptions)
    .pipe(
      tap(_=> console.log(`added Products`)),
      catchError(this.handleError(`Error in adding products`))
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
