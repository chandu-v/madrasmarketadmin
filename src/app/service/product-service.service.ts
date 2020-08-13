import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,  tap, mergeMap, switchMap, map, startWith } from 'rxjs/operators';
import { Observable, of, Subject, from, OperatorFunction } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  private baseURL = "https://madrasmarketplaceapi.azurewebsites.net/";
  private uploadQueueInner$ = new Subject<FileList>();


  get uploadQueue$() {
    return this.uploadQueueInner$
      .asObservable()
      .pipe(mergeMap(files => from(files)));
  }

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'body'
  };

  getProductsById(product_id:any):any{
    const url = `${this.baseURL}products/get/${product_id}`;
    console.log(url);
    return this.http.get(url).pipe(
      tap(_=>console.log(`fetched product details${product_id}`)),
      catchError(this.handleError(`Error in fetching product details ${product_id}`))
    )
  }

  getProducts() {
    const collectionURL = `${this.baseURL}products/`;
    console.log(collectionURL);
    return this.http.get(collectionURL).pipe(
      tap(_ => console.log(`fetched Products`)),
      catchError(this.handleError(`Error in Fetching Collections`)));
  }

  getProductsBySearchItems(search:String){
    let searchTerms  : String[]= search.split(",");
    console.log(searchTerms)
    const searchURL = `${this.baseURL}products/get/search`;
    return this.http.post(searchURL,searchTerms,this.httpOptions).pipe(
      tap(_=> console.log(`fetched Searched Products`)),
      catchError(this.handleError(`Error while searching for products`)));
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

  
  uploadItems(files: FileList): void {
    console.log(files);
    // this.uploadQueueInner$.next(files);
  }

}
