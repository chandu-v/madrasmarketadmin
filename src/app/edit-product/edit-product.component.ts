import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../service/product-service.service';
import { BlobServiceClient } from '@azure/storage-blob';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<
    HTMLInputElement
  >;
  files: FileList;
  imageUploaded = false;
  image1Url = '';

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
    this.image1Url = "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
    this.route.params.subscribe((data) => {

      this.product_id = data["id"];

      this.productService.getProductsById(this.product_id).subscribe((data) => {

        this.product_info = JSON.parse(JSON.stringify(data));
        this.product_name = this.product_info[0]['value'];
        this.product_description = this.product_info[1]['value'];
        this.quantity = this.product_info[3]['value'];
        this.mrp = this.product_info[6]['value'];
        this.discount = this.product_info[8]['value'];
        this.tamil_title = this.product_info[11]['value'];
        this.image1Url = this.product_info[5]['value'];

      });
    });
  }

  onSubmit() {

    let valid = true;
    // console.log(this.mrp);
    if(this.mrp == null || this.discount == null){
      valid = false;
      alert(`Enter a valid MRP or Discount`);
      return;
    }
    if(this.imageUploaded){
      valid = false;
      alert(`Please wait until the product image gets uploaded`);
      return;
    }
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
          "attribute_id": 5
        },
        "value": this.image1Url
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
    ];
    if(valid){
      this.productService.updateProduct(requestBody).subscribe((data) => {

        if(data != undefined){
          alert(`Product details updated successfully`)
        }else{
          alert(`Update Failed. Please try again!`);
        }
      });
    }

  }

  async showFileDialog(): Promise<void> {
    this.fileInput.nativeElement.click();

  }

  async onSelected(files: FileList): Promise<void> {
    this.image1Url = "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
    this.imageUploaded = false;
    this.fileInput.nativeElement.value === '';
    this.files = files;
    // Enter your storage account name and shared key
    const account = "madrasmarketstorage";
    const sas = "?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2070-07-30T21:34:10Z&st=2020-07-30T13:34:10Z&sip=0.0.0.0-255.255.255.255&spr=https,http&sig=Obg8AsUOKw1tMP9ueuHXABBC0LJeQ%2Fn8OeqtigEsFGY%3D";
    const blobServiceClient = new BlobServiceClient(
      `https://${account}.blob.core.windows.net${sas}`
    );
    const containerName = "productimages";
    let i = 1;
    let containers = blobServiceClient.listContainers();

    for await (const container of containers) {

    }

    const containerClient = blobServiceClient.getContainerClient(containerName);

    // const content = "Hello world!";
    let extention = this.files.item(0).name.split(".");

    const blobName = "newblob" + new Date().getTime() + "." + extention[extention.length - 1];

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(this.files.item(0), this.files.length);

    this.image1Url = `https://${account}.blob.core.windows.net/${containerName}/${blobName}`;
    this.imageUploaded = true;
  }
}
