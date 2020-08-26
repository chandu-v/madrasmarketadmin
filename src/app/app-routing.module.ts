import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrderComponent } from './order/order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { ViewSliderImagesComponent } from './view-slider-images/view-slider-images.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeliveryBoyComponent } from './delivery-boy/delivery-boy.component';
import { AddDeliveryBoyComponent } from './add-delivery-boy/add-delivery-boy.component';
import { AssociateComponent } from './associate/associate.component';
import { AddAssociateComponent } from './add-associate/add-associate.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'add-collection/:id', component: AddCollectionComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'order/:status_id', component: OrderComponent },
  { path: 'order/details/:id', component: ViewOrderComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: 'product/edit/:id', component: EditProductComponent},
  { path: 'collection/edit/:id', component: EditComponentComponent},
  { path: 'slider', component: ViewSliderImagesComponent},
  { path: 'transaction',component: ViewTransactionComponent},
  { path: 'login',component: LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'delivery_boy',component:DeliveryBoyComponent},
  {path:'delivery_boy/add',component:AddDeliveryBoyComponent},
  {path:'associate',component:AssociateComponent},
  {path:'associate/add',component:AddAssociateComponent},
  {path:'user',component:UserComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
