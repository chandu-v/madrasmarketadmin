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
  product_name = "";
  product_description = "";
  quantity = "";
  mrp = "";
  discount = "";
  tamil_title = "";
  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      console.log(data);
      this.product_id = data["id"];
      console.log(this.product_id);
      this.productService.getProductsById(this.product_id).subscribe((data) => {
        console.log(data);
        this.product_info = JSON.parse(JSON.stringify(data));
        this.product_name = this.product_info[0]['value'];
        this.product_description = this.product_info[1]['value'];
        this.quantity = this.product_info[3]['value'];
        this.mrp = this.product_info[6]['value'];
        this.discount = this.product_info[8]['value'];
        this.tamil_title = this.product_info[11]['value'];
        console.log(this.product_info);
      });
    });
  }

  onSubmit() {
    let requestBody = [
      {
        "product_Attribute_EmbeddedId": {
          "product_id": this.product_id,
          "attribute_id": 0
        }, "value": this.product_name
      },
      {
        "product_Attribute_EmbeddedId": {
          "product_id": this.product_id,
          "attribute_id": 1
        }, "value": this.product_description
      },
      {
        "product_Attribute_EmbeddedId": {
          "product_id": this.product_id,
          "attribute_id": 3
        }, "value": this.quantity
      },
      {
        "product_Attribute_EmbeddedId": {
          "product_id": this.product_id,
          "attribute_id": 7
        }, "value": this.mrp
      },
      {
        "product_Attribute_EmbeddedId": {
          "product_id": this.product_id,
          "attribute_id": 9
        }, "value": this.discount
      },
      {
        "product_Attribute_EmbeddedId": {
          "product_id": this.product_id,
          "attribute_id": 12
        }, "value": this.tamil_title
      },
    ]
    this.productService.updateProduct(requestBody).subscribe((data) => {
      console.log(JSON.parse(JSON.stringify(data)));
    })
  }

}
