import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from '../service/collection-service.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  displayedColumns: string[] = ['collection_id', 'collection_name', 'action'];
  dataSource = [];
  constructor(private collectionService: CollectionServiceService) {

  }

  ngOnInit(): void {
    console.log(sessionStorage.jwt);
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
    this.collectionService.getCollections()
      .subscribe(data => {
        console.log(data);
        this.dataSource = JSON.parse(JSON.stringify(data));
      })


  }

}
