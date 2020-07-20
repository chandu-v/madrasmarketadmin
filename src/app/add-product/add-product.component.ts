import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  product_name; product_description; upc; quantity; metric; image1; image2; mrp; gst; discount; collection; sku; tamil_title;

  isHidden = true;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.name_form_control.value);
    console.log(this.description_form_control.value);
    console.log(this.upc_form_control.value);
    console.log(this.quantity_form_control.value);
    console.log(this.metric_form_control.value);
    console.log(this.image1_form_control.value);
    console.log(this.image2_form_control.value);
    console.log(this.mrp_form_control.value);
    console.log(this.gst_form_control.value);
    console.log(this.discount_form_control.value);
    console.log(this.collection_form_control.value);
    console.log(this.sku_form_control.value);

    if(!this.name_form_control.hasError('required')
      && this.description_form_control.valid){
        alert('All fields are mandatory');
        return;
    };
    console.log(this.description_form_control.value);
    console.log(this.upc_form_control.value);
    console.log(this.quantity_form_control.value);
    console.log(this.metric_form_control.value);
    console.log(this.image1_form_control.value);
    console.log(this.image2_form_control.value);
    console.log(this.mrp_form_control.value);
    console.log(this.gst_form_control.value);
    console.log(this.discount_form_control.value);
    console.log(this.collection_form_control.value);
    console.log(this.sku_form_control.value);
    
  }

}
