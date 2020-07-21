import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProductServiceService } from '../service/product-service.service';
import { BlobService, UploadConfig, UploadParams } from 'angular-azure-blob-service'
import { StorageSharedKeyCredential, BlobServiceClient } from '@azure/storage-blob';
import { attribute_master } from '../bean/attribute_master';
import { Collection } from '../bean/collection';
import { CollectionServiceService } from '../service/collection-service.service';

const Config: UploadParams = {
  sas: 'my sas',
  storageAccount: 'my dev storage account',
  containerName: 'my container name'
};

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  selectedValue: string;

  collections: Collection[] = [
  ];

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef<
    HTMLInputElement
  >;
  currentFile = null;
  image1Url= '';
  imageUploaded = false;
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
  sku_form_control = new FormControl('', [Validators.required]);
  tamil_title_form_control = new FormControl('', [Validators.required]);

  product_name = "name"; product_description; upc; quantity; metric; image1; image2; mrp; gst; discount; collection; sku; tamil_title;

  isHidden = true;
  files: FileList;
  constructor(private productService: ProductServiceService,private collectionService: CollectionServiceService) { }

  ngOnInit(): void {
    this.collectionService.getCollections()
    .subscribe(data=>{
      console.log(data);
      this.collections = JSON.parse(JSON.stringify(data));
      console.log(this.collections);
    })
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
          "attribute_id": 5
        },
        "value": this.image1Url
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
        "value": this.selectedValue
      },

      {
        "product_Attribute_EmbeddedId": {
          "attribute_id": 11
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
    if(!this.imageUploaded){
      alert("Image is getting uploaded. Please try again");
    }
    
    if (valid && this.imageUploaded) {
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
          this.sku_form_control.setValue('');
        });
    }
  }
  async onSelected(files: FileList): Promise<void> {
    this.imageUploaded = false;
    this.fileInput.nativeElement.value === '';
    this.files = files;
    // Enter your storage account name and shared key
    const account = "madrasmarketstorage";
    const sas = "?sv=2019-10-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2020-07-28T20:45:28Z&st=2020-07-21T12:45:28Z&sip=0.0.0.0-255.255.255.255&spr=https,http&sig=MpcPKJK60r0dOrMohBB5AgO6PEx9nH0lVGRzj%2FBc%2FNk%3D";
    const blobServiceClient = new BlobServiceClient(
      `https://${account}.blob.core.windows.net${sas}`
    );
    const containerName = "productimages";
    let i = 1;
    let containers = blobServiceClient.listContainers();
    console.log(containers);
    for await (const container of containers) {
      console.log(`Container ${i++}: ${container.name}`);
    }

    const containerClient = blobServiceClient.getContainerClient(containerName);
 
  // const content = "Hello world!";
  let extention  = this.files.item(0).name.split(".");
  console.log(extention[extention.length-1]+"\t"+this.files.item(0).type);
  const blobName = "newblob" + new Date().getTime()+"."+extention[extention.length-1];
  console.log(blobName);
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const uploadBlobResponse = await blockBlobClient.upload(this.files.item(0), this.files.length);
  console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
  this.image1Url = `https://${account}.blob.core.windows.net/${containerName}/${blobName}`;
  this.imageUploaded = true;
  }

  async showFileDialog(): Promise<void> {
    this.fileInput.nativeElement.click();
    
  }

}
