import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'add-collection/:id', component: AddCollectionComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order/:id', component: ViewOrderComponent },
  { path: 'product/:id', component: ViewProductComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
