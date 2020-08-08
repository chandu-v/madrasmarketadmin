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
    this.route.params.subscribe((data)=>{
      this.productId = data['id'];
      this.productService.getProductsById(this.productId).subscribe((data)=>{
        console.log(JSON.parse(JSON.stringify(data)));
        this.productDetails = JSON.parse(JSON.stringify(data));
      })
    })
  }

}
