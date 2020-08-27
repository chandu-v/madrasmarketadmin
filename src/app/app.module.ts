import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import { BlobModule } from 'angular-azure-blob-service';
import {MatSelectModule} from '@angular/material/select';
import { OrderComponent } from './order/order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {MatInputModule} from '@angular/material/input';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { ViewSliderImagesComponent } from './view-slider-images/view-slider-images.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeliveryBoyComponent } from './delivery-boy/delivery-boy.component';
import { AssociateComponent } from './associate/associate.component';
import { AddDeliveryBoyComponent } from './add-delivery-boy/add-delivery-boy.component';
import { AddAssociateComponent } from './add-associate/add-associate.component';
import { UserComponent } from './user/user.component';
import { ViewReferralsComponent } from './view-referrals/view-referrals.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AddCollectionComponent,
    ProductComponent,
    AddProductComponent,
    OrderComponent,
    ViewOrderComponent,
    ViewProductComponent,
    EditProductComponent,
    EditComponentComponent,
    ViewSliderImagesComponent,
    ViewTransactionComponent,
    LoginComponent,
    HomeComponent,
    DeliveryBoyComponent,
    AssociateComponent,
    AddDeliveryBoyComponent,
    AddAssociateComponent,
    UserComponent,
    ViewReferralsComponent,
  ],
  imports: [
    BlobModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
