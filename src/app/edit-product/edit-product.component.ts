import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product_id;
  product_info = [];
  constructor(private route:ActivatedRoute,private productService : ProductServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.product_id = data["id"];
      console.log(this.product_id);
      this.productService.getProductsById(this.product_id).subscribe((data)=>{
        console.log(data);
        this.product_info = JSON.parse(JSON.stringify(data));
        console.log(this.product_info);
      })
    })
  }

}
