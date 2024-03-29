import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { AttributeMasterServiceService } from '../service/attribute-master-service.service';
import { FormsModule} from '@angular/forms'


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['product_id','product_name', 'product_description', 'upc','quantity','image','mrp','discount','category','sku','tamil-title'];
  dataSource = [];
  header = [];
  map = new Map();
  searchterm :String = '';
  fromNumber = 0;
  searchTriggered:boolean;
  constructor(private productService: ProductServiceService, private attributeService: AttributeMasterServiceService) { }

  ngOnInit(): void {
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
    this.searchTriggered = false;
    this.productService.getProducts(this.fromNumber)
    .subscribe(data => {
      this.processData(data);
    });
    this.attributeService.getAllAttribute()
    .subscribe(data=>{
      let temp = [];
      temp.push({
        "attribute_id" : -1,
        "attribute_name" : "Edit"
      });
      JSON.parse(JSON.stringify(data)).forEach(element => {
        temp.push(element);
      });
      // temp.push();
      
      this.header = temp;
       
       

    
    });
  }

  goPrevious(){
    
    if(this.fromNumber == 0){
      return;
    }
    this.fromNumber = this.fromNumber-10;
    this.productService.getProducts(this.fromNumber)
    .subscribe(data => {
      this.processData(data);
    });
  }

  getNext(){
    this.fromNumber = this.fromNumber+10;
    this.productService.getProducts(this.fromNumber)
    .subscribe(data => {
      this.processData(data);
    });
  }

  searchProducts(){
     
    if(this.searchterm == ""){
      this.searchTriggered = false;
      this.fromNumber = 0;
      this.productService.getProducts(this.fromNumber)
    .subscribe(data => {
      this.processData(data);
    });
    return;

    }else{
      this.searchTriggered = true;
    }
     
    this.productService.getProductsBySearchItems(this.searchterm).subscribe((data)=>{
      let processedData = JSON.parse(JSON.stringify(data));
       
      this.processData(processedData.body);
      
    });
  }

  processData(data:any){
    this.dataSource = [];
    this.map.clear();
     
    let jsonArr = JSON.parse(JSON.stringify(data));
     
      let tempDataSource = [];
      jsonArr.forEach(element => {
        let product_id = element['product_Attribute_EmbeddedId']['product_id'];
        let attribute_id = element['product_Attribute_EmbeddedId']['attribute_id'];
        let obj = {
          'product_id': product_id,
          'attribute_id': attribute_id,
          'value': element['value']
        }
        tempDataSource.push(obj);
        if (this.map.has(product_id)) {
          let tempArr = this.map.get(product_id);
          tempArr.push(obj);
          this.map.set(product_id, tempArr);

        } else {
          this.map.set(product_id, [obj]);
        }
      });
      this.dataSource = tempDataSource;
       
       
  }

  editProduct(product:any){
    console.log(product)
    console.log("editProductClicked")
  }

}
