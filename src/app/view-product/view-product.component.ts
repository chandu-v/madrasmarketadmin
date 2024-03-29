import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId;
  productDetails;
  constructor(private route:ActivatedRoute,private productService:ProductServiceService) { }

  ngOnInit(): void {
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
    this.route.params.subscribe((data)=>{
      this.productId = data['id'];
      this.productService.getProductsById(this.productId).subscribe((data)=>{
         
        this.productDetails = JSON.parse(JSON.stringify(data));
      })
    })
  }

}
