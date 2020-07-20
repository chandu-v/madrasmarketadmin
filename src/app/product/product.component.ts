import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { AttributeMasterServiceService } from '../service/attribute-master-service.service';


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
  displayedColumns: string[] = ['product_id', 'attribute_id', 'value'];
  dataSource = [];
  header = [];
  map = new Map();
  constructor(private productService: ProductServiceService, private attributeService: AttributeMasterServiceService) { }

  ngOnInit(): void {

    
    this.productService.getProducts()
    .subscribe(data => {
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
      console.log(this.dataSource);
      console.log(this.map);
    });
    this.attributeService.getAllAttribute()
    .subscribe(data=>{
      this.header = JSON.parse(JSON.stringify(data));
      console.log(JSON.parse(JSON.stringify(data)));

    
    });
  }

}
