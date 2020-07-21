import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name_form_control = new FormControl('', [Validators.required]);
  description_form_control = new FormControl('', [Validators.required]);
  upc_form_control = new FormControl('', [Validators.required]);
  quantity_form_control = new FormControl('', [Validators.required]);
  metric_form_control = new FormControl('', [Validators.required]);
  image1_form_control = new FormControl('', [Validators.required]);
  image2_form_control = new FormControl('', [Validators.required]);
  mrp_form_control = new FormControl('', [Validators.required]);
  gst_form_control = new FormControl('', [Validators.required]);
  discount_form_control = new FormControl('', [Validators.required]);
  collection_form_control = new FormControl('', [Validators.required]);
  sku_form_control = new FormControl('', [Validators.required]);
  tamil_title_form_control = new FormControl('', [Validators.required]);

  product_name = "name"; product_description; upc; quantity; metric; image1; image2; mrp; gst; discount; collection; sku; tamil_title;

  isHidden = true;
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {


    let product_attributes = [

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 0
        },
        "value": this.name_form_control.value
      },
      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 1
        },
        "value": this.description_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 2
        },
        "value": this.upc_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 3
        },
        "value": this.quantity_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 4
        },
        "value": this.metric_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 7
        },
        "value": this.mrp_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 8
        },
        "value": this.gst_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 9
        },
        "value": this.discount_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 10
        },
        "value": this.collection_form_control.value
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 1
        },
        "value": this.sku_form_control.value
      }
    ]

    let valid = true;
    console.log(product_attributes);
    for (let element of product_attributes) {
      console.log(element);
      if (element['value'] == '') {
        valid = false;
        alert("All fields are mandatory!");
        break;
      }
    }
    if (valid) {
      this.productService.add(product_attributes)
        .subscribe(data => {
          console.log(data);
          this.name_form_control.setValue('');
          this.description_form_control.setValue('');
          this.upc_form_control.setValue('');
          this.quantity_form_control.setValue('');
          this.metric_form_control.setValue('');
          this.image1_form_control.setValue('');
          this.image2_form_control.setValue('');
          this.mrp_form_control.setValue('');
          this.gst_form_control.setValue('');
          this.discount_form_control.setValue('');
          this.collection_form_control.setValue('');
          this.sku_form_control.setValue('');
        });
    }
  }

}
